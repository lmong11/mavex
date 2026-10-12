import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const languages = ['en', 'zh-CN', 'ja', 'ko', 'th', 'vi'];
const getKeys = (value, prefix = '') => Object.entries(value).flatMap(([key, item]) => {
  const path = prefix ? `${prefix}.${key}` : key;
  return typeof item === 'object' && item !== null ? getKeys(item, path) : [path];
});
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const baseline = JSON.parse(read('src/i18n/locales/en.json'));

for (const language of languages) {
  const locale = JSON.parse(read(`src/i18n/locales/${language}.json`));
  assert.deepEqual(getKeys(locale).sort(), getKeys(baseline).sort(), `${language}: translation keys differ`);
  for (const section of ['materialsPartnership', 'qualityControl', 'redesign']) {
    for (const key of getKeys(locale[section])) {
      const value = key.split('.').reduce((item, part) => item[part], locale[section]);
      assert.equal(typeof value, 'string');
      assert.ok(value.trim().length, `${language}: ${section}.${key} is empty`);
    }
  }
  assert.deepEqual(Object.keys(locale.materialsPartnership.items).sort(), ['catalysts', 'residues', 'scheelite', 'sodiumTungstate']);
  assert.equal(Object.keys(locale.qualityControl.steps).length, 4);
  assert.equal(Object.keys(locale.qualityControl.methods).length, 4);
  assert.match(locale.materialsPartnership.assayBasis, /WO₃/);
  assert.equal(locale.capabilities.feedstocks, undefined, 'Retired feedstock copy should be removed');
  const publicCopy = JSON.stringify(locale);
  assert.doesNotMatch(publicCopy, /202508354H|SCI\/SC\/|APT[- ]?[01]\b|ISO.?17025|ISO.?9001|ICP[- ]?OES/i);
}

const materials = read('src/components/home/MaterialsPartnership.tsx');
assert.match(materials, /processingMaterials = \['sodiumTungstate', 'residues'\]/);
assert.match(materials, /principalAssays = \['WO₃', 'Mo', 'Co', 'Ni'\]/);
assert.match(materials, /traceAssays = \['Cr', 'Cu', 'Fe', 'Mn', 'Mg', 'Na', 'P', 'S'\]/);
assert.doesNotMatch(materials, /<input|<form|type="file"/, 'No unconnected upload or quotation form');
const home = read('src/pages/HomePage.tsx');
assert.doesNotMatch(home, /opacity-0|useInView|<CompanyProfile|<MaterialsPartnership|<QualityControl/,
  'Home should remain visible and use summaries, not embed entire detail pages');
assert.ok(home.includes('<ProductCatalogue />'));
assert.ok(read('src/pages/MaterialsPage.tsx').includes('<MaterialsPartnership />'));
assert.ok(read('src/pages/ProductionQualityPage.tsx').includes('<QualityControl />'));
const routes = read('src/App.tsx');
assert.match(routes, /path="materials-processing"/);
assert.match(routes, /path="production-quality"/);
assert.match(read('src/components/contact/ContactButton.tsx'), /encodeURIComponent\(\[t\('contactDialog.subject'\), subject\]/);
console.log('Business content verified: six locales, purchasing/tolling scope, assay bases, dedicated routes, compact homepage, product enquiries, and disclosure guards.');

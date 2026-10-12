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
  for (const section of ['materialsPartnership', 'qualityControl']) {
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
const company = read('src/components/home/CompanyProfile.tsx');
assert.doesNotMatch(company, /opacity-0|useInView/, 'Long homepage content must stay visible on small viewports');
assert.ok(company.includes('<MaterialsPartnership />') && company.includes('<QualityControl />'));
console.log('Business content verified: six locales, four purchasing categories, two tolling categories, assay bases, quality sections, and disclosure guards.');

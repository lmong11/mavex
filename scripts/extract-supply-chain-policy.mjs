import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Mechanical transcription of the approved bilingual PDF, not a translation.
// Only repeated page furniture and layout whitespace are removed. Page 8 is a
// scanned, stamped issuer/date page; its issuer and date were checked visually.
const pdfUrl = new URL('../public/documents/zhongyu-supply-chain-policy-2026-08-25.pdf', import.meta.url);
const outputUrl = new URL('../src/data/supply-chain-policy.json', import.meta.url);
const pdf = readFileSync(pdfUrl);
const raw = execFileSync('pdftotext', ['-layout', fileURLToPath(pdfUrl), '-'], { encoding: 'utf8' });
const lines = raw.replace(/\f/g, '\n').split('\n').map((line) => line.trim()).filter((line) =>
  line && !line.startsWith('Zhongyu International Metal Materials Industry Co.,Ltd') && !line.startsWith('Dongtai Village'),
);

const groups = [];
for (const line of lines) {
  const language = /[\u3400-\u9fff]/u.test(line) ? 'zh' : 'en';
  const previous = groups.at(-1);
  if (previous?.language === language) previous.lines.push(line);
  else groups.push({ language, lines: [line] });
}
assert.equal(groups.length, 96, 'Unexpected source structure: review the PDF before updating the transcription.');

const pairs = [];
for (let index = 0; index < groups.length; index += 2) {
  assert.equal(groups[index].language, 'zh');
  assert.equal(groups[index + 1].language, 'en');
  pairs.push({
    zh: groups[index].lines.reduce((text, line) =>
      text + (/[A-Za-z0-9]$/.test(text) && /^[A-Za-z0-9]/.test(line) ? ' ' : '') + line, '',
    ).replace(/\s+/g, ' '),
    en: groups[index + 1].lines.join(' ').replace(/\s+/g, ' '),
  });
}

const sections = [];
const closing = [];
let inClosing = false;
for (const pair of pairs.slice(2)) {
  const heading = pair.zh.match(/^([1-8])\s+(.+)$/u);
  if (heading) {
    sections.push({ number: Number(heading[1]), title: { zh: heading[2], en: pair.en }, blocks: [] });
    continue;
  }
  if (pair.zh.startsWith('公司将本着持续改进的原则')) inClosing = true;
  if (inClosing) closing.push(pair);
  else {
    assert.ok(sections.length, 'A body paragraph must belong to a section.');
    sections.at(-1).blocks.push({
      kind: pair.zh.includes('风险管理') && /[:：]$/u.test(pair.zh) ? 'subheading' : 'paragraph',
      ...pair,
    });
  }
}
assert.deepEqual(sections.map(({ number }) => number), [1, 2, 3, 4, 5, 6, 7, 8]);
assert.equal(closing.length, 2);

const data = {
  title: pairs[0],
  issuer: { zh: '中钰国际金属材料实业有限公司', en: 'Zhongyu International Metal Materials Industry Co.,Ltd' },
  date: '2026-08-25',
  source: {
    path: '/documents/zhongyu-supply-chain-policy-2026-08-25.pdf',
    sha256: createHash('sha256').update(pdf).digest('hex'),
    pages: 8,
    bytes: pdf.length,
  },
  introduction: pairs[1],
  sections,
  closing,
};

const compact = (text) => text.replace(/\s/g, '');
const reconstructed = [data.title, data.introduction, ...sections.flatMap((section) => [
  { zh: `${section.number} ${section.title.zh}`, en: section.title.en }, ...section.blocks,
]), ...closing].map(({ zh, en }) => zh + en).join('');
assert.equal(compact(reconstructed), compact(lines.join('')), 'Transcription must preserve every source character in reading order.');

const serialized = `${JSON.stringify(data, null, 2)}\n`;
if (process.argv.includes('--check')) {
  assert.equal(readFileSync(outputUrl, 'utf8'), serialized, 'Committed policy text differs from the approved PDF.');
  console.log(`Policy verified: 8 sections, 48 bilingual pairs, ${compact(reconstructed).length} source characters, SHA-256 ${data.source.sha256}`);
} else {
  writeFileSync(outputUrl, serialized);
  console.log('Generated complete bilingual policy data from the original PDF.');
}

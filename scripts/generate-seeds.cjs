#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const levelsDir = path.join(__dirname, '../src/data/levels');

const levelMeta = {
  1: 'Level 1 — コーヒーの基礎',
  2: 'Level 2 — 産地・品種',
  3: 'Level 3 — 焙煎・抽出',
  4: 'Level 4 — 器具・レシピ',
  5: 'Level 5 — 上級・応用',
};

function escSql(s) {
  return String(s).replace(/'/g, "''");
}

function loadLevel(num) {
  const filename = path.join(levelsDir, `level0${num}.js`);
  const src = fs.readFileSync(filename, 'utf8');

  // Transform ESM → CJS: remove export default, rename const to __data
  const transformed = src
    .replace(/^\/\/.*$/gm, '')                   // strip line comments
    .replace(/export\s+default\s+\w+;?/g, '')    // remove export default
    .replace(/const\s+level\d+\s*=/, 'const __data =') // rename variable
    + '\nmodule.exports = __data;';

  const tmpPath = filename + '.tmp.cjs';
  fs.writeFileSync(tmpPath, transformed);
  try {
    // Clear require cache in case of re-runs
    delete require.cache[require.resolve(tmpPath)];
    return require(tmpPath);
  } finally {
    fs.unlinkSync(tmpPath);
  }
}

let sql = '';

// ── Levels ──────────────────────────────────────────────────────────────────
sql += '-- =============================================\n';
sql += '-- Levels\n';
sql += '-- =============================================\n';
sql += 'INSERT INTO levels (id, title, question_count, is_published) VALUES\n';

const rows = [];
for (let i = 1; i <= 5; i++) {
  rows.push(`  (${i}, '${escSql(levelMeta[i])}', 30, 1)`);
}
for (let i = 6; i <= 15; i++) {
  rows.push(`  (${i}, 'Level ${i}', 0, 0)`);
}
sql += rows.join(',\n') + ';\n\n';

// ── Questions ────────────────────────────────────────────────────────────────
for (let levelNum = 1; levelNum <= 5; levelNum++) {
  const questions = loadLevel(levelNum);
  sql += `-- =============================================\n`;
  sql += `-- Questions — Level ${levelNum}\n`;
  sql += `-- =============================================\n`;

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const a = q.answers;
    sql += `INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES\n`;
    sql += `  (${levelNum}, '${escSql(q.question)}', '${escSql(a[0])}', '${escSql(a[1])}', '${escSql(a[2])}', '${escSql(a[3])}', ${q.correctIndex}, '${escSql(q.explanation)}', ${i + 1});\n`;
  }
  sql += '\n';
}

const outPath = path.join(__dirname, '../seeds.sql');
fs.writeFileSync(outPath, sql, 'utf8');
console.log(`✓ seeds.sql generated (${sql.split('\n').length} lines)`);

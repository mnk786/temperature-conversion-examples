const assert = require('node:assert/strict');

const cToF = (c) => c * 9 / 5 + 32;
const fToC = (f) => (f - 32) * 5 / 9;

// This tolerance is for the small reference values below.
for (const [c, f] of [[0, 32], [100, 212], [-40, -40], [-10.5, 13.1], [37, 98.6]]) {
  assert.ok(Math.abs(cToF(c) - f) < 1e-9);
  assert.ok(Math.abs(fToC(f) - c) < 1e-9);
}

assert.ok(Math.abs(fToC(350) - 530 / 3) < 1e-9);
assert.ok(Math.abs(fToC(0) - (-160 / 9)) < 1e-9);
assert.equal(fToC(350).toFixed(2), '176.67');
assert.equal(fToC(0).toFixed(2), '-17.78');

const rawC = fToC(350);
assert.equal(cToF(rawC).toFixed(2), '350.00');
assert.equal(cToF(Number(rawC.toFixed(2))).toFixed(3), '350.006');

console.log('JavaScript temperature reference, display and swap checks passed.');

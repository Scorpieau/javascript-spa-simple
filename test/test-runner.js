// test/test-runner.js
import test from 'node:test';
import assert from 'assert';

// Simple test suite using Node.js built-in test runner

// Test that addition works correctly
test('Addition works', () => {
  const result = 1 + 1;
  assert.strictEqual(result, 2);
});

// Test that a string includes a substring
test('String includes substring', () => {
  const str = 'hello world';
  assert.ok(str.includes('world'));
});

// Test that array length is correct
test('Array length is correct', () => {
  const arr = [1, 2, 3];
  assert.strictEqual(arr.length, 3);
});

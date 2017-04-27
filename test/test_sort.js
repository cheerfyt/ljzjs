'use strict';

const sort = require("..");
const {test} = require("ava");

const bubble = sort.bubbleSort;
const insert = sort.insertSort;
const quick  = sort.quickSort;
const shell  = sort.shellSort;

const src = [2, 1, 24, 17, 10, 9, 3, 4, 89, 55];
const sorted = [1, 2, 3, 4, 9, 10, 17, 24, 55, 89];

test('1. #bubble sort ', t => {
  t.deepEqual(bubble(src), sorted);
});

test('2. #insert sort', t => {
  t.deepEqual(insert(src), sorted);
});

test('3. #quick sort', t => {
  t.deepEqual(quick(src), sorted);
});

test('4. #shell sort', t => {
  t.deepEqual(shell(src), sorted);
});

test('5. #same result', t => {
  t.deepEqual(bubble(src), insert(src));
  t.deepEqual(quick(src), shell(src));
  t.deepEqual(bubble(src), quick(src));
});

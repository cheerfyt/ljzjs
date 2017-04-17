'use strict';

const sort = require("..");
const {test} = require("ava");

const bubble = sort.bubbleSort;
const insert = sort.insertSort;

const src = [2, 1, 24, 17, 10, 9, 3, 4, 89, 55];
const sorted = [1, 2, 3, 4, 9, 10, 17, 24, 55, 89];

test('1. #bubble sort ', t => {
  t.deepEqual(bubble(src), sorted);
});

test('2. #insert sort', t => {
  t.deepEqual(insert(src), sorted);
});

test('3. #same result', t => {
  t.deepEqual(bubble(src), insert(src));
});

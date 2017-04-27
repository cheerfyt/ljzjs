'use strict';

/**
 * @param {src} array
 * @return {arr} array
 * @private
 */

function cp_arr(src) {
  var arr = new Array();
  for (var i = 0; i < src.length; i++) arr.push(src[i]);
  return arr;
}

/**
 * @param {*} array
 * @param {*} first
 * @param {*} second
 * @private
 */
function swap(array, first, second) {
  var tmp = array[first];
  array[first] = array[second];
  array[second] = tmp;
  return array;
}

/**
 * @param {*} a
 * @param {*} b
 * @private
 */
function compare(a, b) {
  return a > b ? 1 : -1;
}

/**
 * @param {array, compare function}
 * @return {array} sorted array
 * @public
 */
exports.insertSort = function(arr, comp) {
  if (!Array.isArray(arr) || arr.length < 2) return arr;
  var arr_d = cp_arr(arr);
  if (typeof comp !== 'function') comp = compare;

  for (var i = 0; i < arr_d.length; i++) {
    var j = i;
    while ((j - 1) >= 0 && comp(arr_d[j], arr_d[j - 1]) < 0) {
      swap(arr_d, j, j - 1);
      j--;
    }
  }
  return arr_d;
}

/**
 * @param {array, compare function}
 * @return {array} sorted array
 * @public
 */
exports.bubbleSort = function(arr, comp) {
  if (!Array.isArray(arr) || arr.length < 2) return arr;
  var arr_d = cp_arr(arr);
  if (typeof comp !== 'function') comp = compare;

  for (var i = 0; i < arr_d.length; i++) {
    var j = i;
    while (j-- && comp(arr_d[j], arr_d[j + 1]) > 0) swap(arr_d, j, j + 1);
  }
  return arr_d;
}

/**!
 * @desc quick sort;
 * wiki: https://en.wikipedia.org/wiki/Quicksort
 */
exports.quickSort = function quickSort(arr, comp) {
  var len = arr.length;
  if (len <= 1) return arr.slice(0);
  if (typeof comp !== 'function') comp = compare;

  var left = [];
  var right = [];
  var mid = [arr[0]];

  for (var i = 1; i < len; i++) {
    if (comp(arr[i], mid[0]) < 0) left.push(arr[i])
    else right.push(arr[i]);
  }
  return quickSort(left).concat(mid.concat(quickSort(right)));
}

/**!
 * @desc shell sort;
 * wiki: https://en.wikipedia.org/wiki/Shellsort
 */

exports.shellSort = function shellSort(arr, comp) {
  var gap, i, j, temp;
  if (!Array.isArray(arr) || arr.length < 2) return arr;
  var arr_d = cp_arr(arr);
  if (typeof comp !== 'function') comp = compare;

  for (gap = arr_d.length >> 1; gap > 0; gap >>= 1) {
    for (i = gap; i < arr_d.length; i++) {
      temp = arr_d[i];
      for (j = i - gap; j >= 0 && arr_d[j] > temp; j -= gap)
        arr_d[j + gap] = arr_d[j];
      arr_d[j + gap] = temp;
    }
  }
  return arr_d;
};

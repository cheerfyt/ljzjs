ljzjs
=====
javascript sort function, include bubble sort, insert sort


usage
=====

```bash
$ var bubble = require("ljzjs").bubbleSort;
$ var insert = require("ljzjs").insertSort;
$ var arr = [1, 4, 2, 7, 9, 6, 5, 10, 3, 100, 102, 101, 23, 34, 45, 43, 32, 4];
$ console.log("bubble => ", bubble(arr));
$ console.log("insert => ", insert(arr));
```

```bash
$ bubble => [ 1, 2, 3, 4, 4, 5, 6, 7, 9, 10, 23, 32, 34, 43, 45, 100, 101, 102 ]
$ insert => [ 1, 2, 3, 4, 4, 5, 6, 7, 9, 10, 23, 32, 34, 43, 45, 100, 101, 102 ]
```

cost
=====
```bash
$ console.time('bubble');
$ bubble(arr);
$ console.timeEnd('bubble');
```

```bash
$ console.time('insert');
$ insert(arr);
$ console.timeEnd('insert');
```

```bash
$ insert: 8.349ms
$ bubble: 0.404ms
```

test
====
```bash
$ npm test
```

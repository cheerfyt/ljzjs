<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ljzjs](#ljzjs)
- [usage](#usage)
- [cost](#cost)
- [test](#test)
- [TODO](#todo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

ljzjs
=====
javascript sort function, include bubble sort, insert sort


usage
=====

```bash

$ var bubble = require("ljz").bubbleSort;
$ var insert = require("ljz").insertSort;
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


TODO
====
- more sort function, quick sort, shell sort ...

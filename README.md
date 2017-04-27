<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ljzjs](#ljzjs)
- [usage](#usage)
- [test](#test)
- [TODO](#todo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

ljzjs
=====

[![Build Status](https://travis-ci.org/ljzjs/ljzjs.svg?branch=master)](https://travis-ci.org/ljzjs/ljzjs)

javascript sort function, include bubble sort, insert sort, quick sort


usage
=====

```javascript
'use strict';

var bubble = require("ljz").bubbleSort;
var insert = require("ljz").insertSort;
var quick  = require("ljz").quickSort;
var shell  = require("ljz").shellSort;
var arr = [1, 4, 2, 7, 9, 6, 5, 10, 3, 100, 102, 101, 23, 34, 45, 43, 32, 4];
console.log("bubble => ", bubble(arr));
console.log("insert => ", insert(arr));
console.log("quick => ", quick(arr));
console.log("shell => ", shell(arr));
```

```bash
$ bubble => [ 1, 2, 3, 4, 4, 5, 6, 7, 9, 10, 23, 32, 34, 43, 45, 100, 101, 102 ]
$ insert => [ 1, 2, 3, 4, 4, 5, 6, 7, 9, 10, 23, 32, 34, 43, 45, 100, 101, 102 ]
$ quick => [ 1, 2, 3, 4, 4, 5, 6, 7, 9, 10, 23, 32, 34, 43, 45, 100, 101, 102 ]
$ shell => [ 1, 2, 3, 4, 4, 5, 6, 7, 9, 10, 23, 32, 34, 43, 45, 100, 101, 102 ]
```

test
====

```sh
$ npm test
```


TODO
====

- more sort function, comb sort ...

# set-operations

[![npm][npm-img]][npm-url]
[![pipeline status][pipeline-status-img]][repo-url]
[![coverage report][coverage-report-img]][repo-url]

Javascript Set operations with ES6 Sets.


## Installation

```shell script
npm i set-operations
```
## tests

```shell script
npm run test
```

## build

```shell script
npm run build
```
### modules

- [isSuperSet](#issuperset)
- [isSubSet](#issubset)
- [union](#union)
- [intersection](#intersection)
- [difference](#difference)
- [symmetric difference](#symmetric-difference)

</ul>

### args
isSubset, isSuperSet: (arrA, arrB)

* arrA - Array
* arrB - Array 

union, intersection, difference, symmetric difference: (arrA, arrB, returnAsArray)

* arrA - Array
* arrB - Array
* returnAsArray - boolean , default - false, if set true, returns the result as an array instead of a Set.

<h3>
isSuperSet
</h3>

```js
import {isSuperSet} from "set-operations";

isSuperSet([1, 8, 3, 5], [3, 8]);
// true

isSuperSet([1, 8, 3, 5], [3, 9]);
// false

isSuperSet(['apple', 'orange', 'banana'], ['banana']);
// true
```

<h3>isSubSet</h3>

```js
import {isSubSet} from "set-operations";

isSubSet([4, 5], [1, 9, 4, 8, 34, 43, 5]);
// true

isSubSet(["red", "blue"], ["violet", "indigo", "blue", "green", "yellow", "orange", "red"]);
// true
```

<h3>union</h3>

<p>Union (A ∪ B): create a set that contains the elements of both arr A and arr B.</p>

```js
import {union} from "set-operations";

union(["rio", "delhi", "nairobi"], ["morocco", "algeria", "texas"]);

// Set { "rio", "delhi", "nairobi", "morocco", "algeria", "texas" }
```

<h3>intersection</h3>

Intersection (A ∩ B): create a set that contains those elements of Arr A that are also in Arr B.

```js
import {intersection} from "set-operations";

intersection([67, 21, 52, 78, 32, 321, 98, 97], [342, 52, 63, 89, 21]);

// Set { 21, 52 }
```

<h3>difference</h3>

<p>Difference (A \ B): create a set that contains those elements of Arr A that are not in Arr B.</p>

```js
import {difference} from "set-operations";

difference([43, 562,52, 223, 652, 1], [43, 42, 524, 542, 100, 52]);

// Set { 562, 223, 652, 1 }
```

<h3>symmetric difference</h3>

<p>Symmetric Difference (A ∆ B): create a set of all elements which are in Arr A or Arr B but not both.</p>


```js
import {symmetricDifference} from "set-operations";

symmetricDifference([0, 1, 2, 3, 4], [5, 6, 7, 8, 9]);

// Set { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }

symmetricDifference(["sun", "rises", "in", "the", "east"], ["sun", "sets", "in", "the", "west"])

// Set { "rises", "east", "sets", "west" }
```

## License

MIT

[npm-img]: https://img.shields.io/npm/v/set-operations.svg
[npm-url]: https://npmjs.com/package/set-operations
[pipeline-status-img]: https://gitlab.com/indrajaala/set-operations/badges/master/pipeline.svg
[coverage-report-img]: https://gitlab.com/indrajaala/set-operations/badges/master/coverage.svg
[repo-url]: https://gitlab.com/indrajaala/set-operations/commits/master
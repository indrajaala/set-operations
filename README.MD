# set-operations

[![npm][npm-img]][npm-url]
![Tests][github-test-badge]
![Publish][github-publish-badge]

Javascript Set operations with Sets, Arrays & Objects.

## Installation

```shell script
npm i set-operations
```

## build

```shell script
npm run build
```

## test

```shell script
npm run test
```

### modules

- [isSuperset](#issuperset)
- [isSubset](#issubset)
- [isDisjoint](#isdisjoint)
- [union](#union)
- [intersection](#intersection)
- [difference](#difference)
- [symmetric difference](#symmetric-difference)

### args

isSubset, isSuperSet, isDisjoint: (A, B)

* A - Array | Obj | Set
* B - Array | Obj | Set

returns boolean

union, intersection, difference, symmetric difference: (A, B)

* A - Array | Obj | Set
* B - Array | Obj | Set

returns Array | Obj | Set

<h2>Examples:<h4>

### isSuperset

Superset (A ⊇ B) : checks if A is superset of B, i.e. all elements of B are also elements of A.

```js
import {isSuperSet} from "set-operations";

isSuperSet(new Set([1, 8, 3, 5]), new Set([3, 8]));
// true

isSuperSet(new Set([1, 8, 3, 5]), new Set([3, 9]));
// false

isSuperSet([1, 8, 3, 5], [3, 8]);
// true

isSuperSet([1, 8, 3, 5], [3, 9]);
// false

isSuperSet(["apple", "orange", "banana"], ["banana"]);
// true

isSuperSet(
    {id: "xyz", name: "john doe", age: 59, work: "janitor"},
    {id: "xyz", work: "janitor"}
);
// true

isSuperSet(
    {id: "xyz", name: "john doe", age: 59, work: "janitor"},
    {id: "xyz", work: "janitor", likes: "football"}
);
// false


```

### isSubset

Subset (A ⊆ B) : checks if A is subset of B, i.e. all elements of A are also elements of B. 

```js
import {isSubSet} from "set-operations";

isSubSet(new Set([4, 5]), new Set([1, 9, 4, 8, 34, 43, 5]));
// true

isSubSet(
    new Set(["red", "blue"]),
    new Set(["violet", "indigo", "blue", "green", "yellow", "orange", "red"])
);
// true

isSubSet([4, 5], [1, 9, 4, 8, 34, 43, 5]);
// true

isSubSet(
    ["red", "blue"],
    ["violet", "indigo", "blue", "green", "yellow", "orange", "red"]
);
// true

isSubSet(
    {id: "xyz", work: "janitor"},
    {id: "xyz", name: "john doe", age: 59, work: "janitor"}
);
// true

isSubSet(
    {a: 1, b: 2, c: 3},
    {b: 2, c: 3}
);
// false



```
### isDisjoint

Disjoint (A ∩ B = ϕ) : checks if A and B are disjoint i.e. A and B have no elements in common.

```js
import {isDisjoint} from "set-operations";

isDisjoint(new Set([2, 3, 5, 7, 11, 13, 17, 19]), new Set([1, 4, 9, 16]));
// true

isDisjoint(new Set([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]), new Set([1, 4, 9, 16]));
// false

isDisjoint([2, 3, 5, 7, 11, 13, 17, 19], [1, 4, 9, 16]);
// true

isDisjoint([4, 6, 8, 9, 10, 12, 14, 15, 16, 18], [1, 4, 9, 16]);
// false

isDisjoint(
    {a: 2, b: 3, c: 5, d: 7, e: 11, f: 13, g: 17, h: 19},
    {a: 1, b: 4, c: 9, d: 16}
);
// true
```

### union

Union (A ∪ B): creates a Set/Arr/Obj that contains the elements of both A and B.

```js
import {union} from "set-operations";

union(new Set(["rio", "delhi", "nairobi"]), new Set(["morocco", "algeria", "texas"]));
// Set(6) [ "rio", "delhi", "nairobi", "morocco", "algeria", "texas" ]

union(["rio", "delhi", "nairobi"], ["morocco", "algeria", "texas"]);
// [ "rio", "delhi", "nairobi", "morocco", "algeria", "texas" ]

union(
    {firstname: "john", lastname: "doe"},
    {age: 59, hobbies: ["fishing", "cycling"]}
);
// { firstname: "john", lastname: "doe", age: 59, hobbies: [ "fishing", "cycling" ] }
```

**note:** for objects, union puts the elements of A and elements of B in to a new object - {...A, ...B,},
if the keys of elements in both A and B are same then the elements of B replaces elements of A.

### intersection

Intersection (A ∩ B): creates a Set/Arr/Obj that contains those elements of A that are also in B.

```js
import {intersection} from "set-operations";

intersection(new Set([67, 21, 52, 78, 32, 321, 98, 97]), new Set([342, 52, 63, 89, 21]));
// Set [ 52, 21 ]

intersection([67, 21, 52, 78, 32, 321, 98, 97], [342, 52, 63, 89, 21]);
// [ 21, 52 ]

intersection(
    {a: {a: 1, b: {c: 2, d: 3}}, b: 2, c: 3, d: 4, e: 5},
    {e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}}
);
// { a: { a: 1, b: { c: 2, d: 3 } }, c: 3, e: 5 }


```

### difference

Difference (A \ B): creates a Set/Arr/Obj that contains those elements of A that are not in B.

```js
import {difference} from "set-operations";

difference(new Set([43, 562, 52, 223, 652, 1]), new Set([43, 42, 524, 542, 100, 52]));
// Set(4) [ 562, 223, 652, 1 ]

difference([43, 562, 52, 223, 652, 1], [43, 42, 524, 542, 100, 52]);
// [ 562, 223, 652, 1 ]

difference(
    {a: {a: 1, b: {c: 2, d: 3}}, b: 2, c: 3, d: 4, e: 5},
    {e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}}
);
// { b: 2, d: 4 }



```

### symmetric difference

Symmetric Difference (A ∆ B): creates a Set/Arr/Obj of all elements which are in A or B but not both.

```js
import {symmetricDifference} from "set-operations";

symmetricDifference(new Set([0, 1, 2, 3, 4]), new Set([5, 6, 7, 8, 9]));
// Set(10) [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

symmetricDifference([0, 1, 2, 3, 4], [5, 6, 7, 8, 9]);
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

symmetricDifference(
    ["sun", "rises", "in", "the", "east"],
    ["sun", "sets", "in", "the", "west"]
);
// [ "rises", "east", "sets", "west" ]

symmetricDifference(
    {a: {a: 1, b: {c: 2, d: 3}}, b: 2, c: 3, d: 4, e: 5},
    {e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}}
);
// { b: 2, d: 4, f: 6 }

```

**note:** for objects, symmetric difference performs difference on A to B and then B to A and puts the elements in to a new
object - {...difference(A, B), ...difference(B, A)},
if the keys of elements in both A and B are same then the elements of B replaces elements of A.

```js
symmetricDifference(
    {star: "sun", does: "rises", direction: "east"},
    {star: "sun", does: "sets", direction: "west"}
);
// { does: "sets", direction: "west" }
```

## License

MIT

[npm-img]: https://img.shields.io/npm/v/set-operations.svg
[npm-url]: https://npmjs.com/package/set-operations
[github-test-badge]: https://github.com/indrajaala/set-operations/actions/workflows/test.yml/badge.svg
[github-publish-badge]: https://github.com/indrajaala/set-operations/actions/workflows/npm-publish.yml/badge.svg
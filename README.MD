# set-operations

[![npm][npm-img]][npm-url]
![example workflow](https://github.com/indrajaala/set-operations/actions/workflows/test.yml/badge.svg)
![example workflow](https://github.com/indrajaala/set-operations/actions/workflows/npm-publish.yml/badge.svg)

Javascript Set operations with Arrays & Objects.


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
isSubset, isSuperSet: (A, B) 

* A - Array | obj
* B - Array | obj

returns boolean

union, intersection, difference, symmetric difference: (A, B)

* arrA - Array | obj
* arrB - Array | obj

returns Array | obj


<h2>Examples:<h4>

<h3>isSuperSet</h3>

<p>Superset (A ⊇ B) : check if A is superset of B, i.e all elements of B are also elements of A. </p>


```js
import {isSuperSet} from "set-operations";

isSuperSet([1, 8, 3, 5], [3, 8]);
// true

isSuperSet([1, 8, 3, 5], [3, 9]);
// false

isSuperSet(['apple', 'orange', 'banana'], ['banana']);
// true

isSuperSet({id:'xyz', name:"john doe",age:59, work:"janitor"},{id:'xyz', work:"janitor"});
// true

isSuperSet({id:'xyz', name:"john doe",age:59, work:"janitor"},{id:'xyz', work:"janitor", likes:"football"});

// false


```

<h3>isSubSet</h3>

<p>Subset (A ⊆ B) : check if A is subset of B, i.e all elements of A are also elements of B. </p>


```js
import {isSubSet} from "set-operations";

isSubSet([4, 5], [1, 9, 4, 8, 34, 43, 5]);
// true

isSubSet(["red", "blue"], ["violet", "indigo", "blue", "green", "yellow", "orange", "red"]);
// true

isSubSet({id:'xyz', work:"janitor"},{id:'xyz', name:"john doe",age:59, work:"janitor"})
//true

isSubSet({a:1,b:2,c:3},{b:2,c:3});
//false



```

<h3>union</h3>

<p>Union (A ∪ B): create a Arr/obj that contains the elements of both A and B.</p>

```js
import {union} from "set-operations";

union(["rio", "delhi", "nairobi"], ["morocco", "algeria", "texas"]);

// [ "rio", "delhi", "nairobi", "morocco", "algeria", "texas" ]

union({firstname:"john", lastname:"doe"},{age:59, hobbies:["fishing", "cycling"]})

// {firstname:"john",lastname:"doe",age:59,hobbies:["fishing", "cycling"]}
```

note:for objects, union puts the elements of A and elements of B in to a new object - {...A, ...B,},
if the keys of elements in both A and B are same then the elements of B replaces elements of A.

<h3>intersection</h3>

Intersection (A ∩ B): create a Arr/obj that contains those elements of A that are also in B.

```js
import {intersection} from "set-operations";

intersection([67, 21, 52, 78, 32, 321, 98, 97], [342, 52, 63, 89, 21]);

// [ 21, 52 ]

intersection({a: {a: 1, b: {c: 2,d:3}}, b: 2, c: 3, d: 4, e: 5},
             {e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}}
            )

//{ a: { a: 1, b: { c: 2, d: 3 } }, c: 3, e: 5 }


```

<h3>difference</h3>

<p>Difference (A \ B): create a Arr/obj that contains those elements of A that are not in B.</p>

```js
import {difference} from "set-operations";

difference([43, 562, 52, 223, 652, 1], [43, 42, 524, 542, 100, 52]);

// [ 562, 223, 652, 1 ]

difference({a: {a: 1, b: {c: 2,d:3}}, b: 2, c: 3, d: 4, e: 5},
           {e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}}
           )
    
// { b: 2, d: 4 }



```

<h3>symmetric difference</h3>

<p>Symmetric Difference (A ∆ B): create a Arr/obj of all elements which are in A or B but not both.</p>




```js
import {symmetricDifference} from "set-operations";

symmetricDifference([0, 1, 2, 3, 4], [5, 6, 7, 8, 9]);

// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

symmetricDifference(["sun", "rises", "in", "the", "east"], ["sun", "sets", "in", "the", "west"])

// Set [ "rises", "east", "sets", "west" ]

symmetricDifference({a: {a: 1, b: {c: 2,d:3}}, b: 2, c: 3, d: 4, e: 5},
                    {e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}}
                   )

//{ b: 2, d: 4, f: 6 }

```
note:for objects, symmetric difference performs difference on A to B and then B to A and puts the elements in to a new object - {...difference(A, B), ...difference(B, A)},
if the keys of elements in both A and B are same then the elements of B replaces elements of A.

```js
symmetricDifference({star:"sun",does:"rises",direction:"east"},
                    {star:"sun", does:"sets",direction:"west"}
                   )

//{does:"sets", direction:"west"});
```

## License

MIT

[npm-img]: https://img.shields.io/npm/v/set-operations.svg
[npm-url]: https://npmjs.com/package/set-operations
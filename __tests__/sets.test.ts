import {test,expect} from "vitest";

import {difference, intersection, isSubSet, isSuperSet, symmetricDifference, union} from "../src/main";


test('subset and superset', () => {
    expect(isSuperSet([1, 8, 3, 5], [3, 8])).toBe(true);
    expect(isSuperSet([1, 8, 3, 5], [3, 9])).toBe(false);
    expect(isSuperSet(['apple', 'orange', 'banana'], ['banana'])).toBe(true);
    expect(isSuperSet([10, 30, 60, 70], [20, 50])).toBe(false);
    expect(isSuperSet({a:1,b:2,c:3},{b:2,c:3})).toBe(true);
    expect(isSuperSet({a:1,b:2,c:3},{b:3,c:3})).toBe(false);
    expect(isSuperSet({id:'xyz', name:"john doe",age:59, work:"janitor"},{id:'xyz', work:"janitor"})).toBe(true)
    expect(isSuperSet({id:'xyz', name:"john doe",age:59, work:"janitor"},{id:'xyz', work:"janitor", likes:"football"})).toBe(false)
    expect(isSubSet([4, 5], [1, 9, 4, 8, 34, 43, 5])).toBe(true);
    expect(isSubSet(["red", "blue"], ["violet", "indigo", "blue", "green", "yellow", "orange", "red"])).toBe(true);
    expect(isSubSet(["red", "blues"], ["violet", "indigo", "blue", "green", "yellow", "orange", "red"])).toBe(false);
    expect(isSubSet({a:1,b:2,c:3},{b:2,c:3})).toBe(false);
    expect(isSubSet({b:2,c:3},{a:1,b:2,c:3},)).toBe(true);
    expect(isSubSet({id:'xyz', work:"janitor"},{id:'xyz', name:"john doe",age:59, work:"janitor"})).toBe(true)


});

test('union', () => {
    expect(union([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(union([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).not.toEqual(![1, 2, 3, 5, 6, 7, 8, 9, 10]);
    expect(union(["rio", "delhi", "nairobi"], ["morocco", "algeria", "texas"])).toEqual(["rio", "delhi", "nairobi","morocco", "algeria", "texas"]);
    expect(union({id:'xyz',name:"john doe"},{age:"59",work:"developer"})).toEqual({id:'xyz',name:"john doe",age:"59",work:"developer"})
    expect(union({firstname:"john", lastname:"doe"},{age:59, hobbies:["fishing", "cycling"]})).toEqual({firstname:"john",lastname:"doe",age:59,hobbies:["fishing", "cycling"]})

});

test('intersection', () => {
    expect(intersection([67, 21, 52, 78, 32, 321, 98, 97], [342, 52, 63, 89, 21])).toEqual([21, 52]);
    expect(intersection([67, 21, 52, 78, 32, 321, 98, 97], [342, 52, 63, 89, 21])).toEqual([21, 52]);
    expect(intersection(["yellow", "orange", "red"], ["blue", "red", "green"])).toEqual(["red"]);
    expect(intersection(["yellow", "orange", "red"], ["blue", "redis", "green"])).not.toEqual(["red"]);
    expect(intersection({a: {a: 1, b: {c: 2,d:3}}, b: 2, c: 3, d: 4, e: 5},{e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}})).toEqual({ a: { a: 1, b: { c: 2, d: 3 } }, c: 3, e: 5 });
    expect(intersection({a: {a: 1, b: {c: 2}}, b: 2, c: 3, d: 4, e: 5},{e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}})).toEqual({c: 3, e: 5 });
});

test('difference', () => {
    expect(difference([43, 562, 223, 652, 1], [43, 42, 524, 542, 100, 42, 52])).toEqual([562,223,652,1]);
    expect(difference([43, 562, 223, 652, 1], [43, 42, 524, 542, 100, 42, 52])).not.toEqual([223, 562, 652]);
    expect(difference(["ant", "lizard", "tree"], ["table", "mug", "tree", "brush", "hose"])).toEqual(["ant", "lizard"]);
    expect(difference(["ant", "lizard", "tree"], ["table", "mug", "tree", "brush", "hose"])).toEqual(["ant", "lizard"]);
    expect(difference({a: {a: 1, b: {c: 2,d:3}}, b: 2, c: 3, d: 4, e: 5},{e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}})).toEqual({ b: 2, d: 4 });
    expect(difference({a: {a: 1, b: {c: 2}}, b: 2, c: 3, d: 4, e: 5},{e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}})).toEqual({ a: {a: 1, b: {c: 2}},b: 2, d: 4 });
    expect(difference({a: {a: 1, b: {c: 2,d:3}}, b: 2, c: 3, d: 4, e: 5},{e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}})).not.toEqual({ a: {a: 1, b: {c: 2}},b: 2, d: 4 });
});

test('symmetric difference', () => {
    expect(symmetricDifference([0, 1, 2, 3, 4], [5, 6, 7, 8, 9])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(symmetricDifference([0, 1, 2, 3, 4], [5, 6, 7, 8, 9])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(symmetricDifference(["sun", "rises", "in", "the", "east"], ["sun", "sets", "in", "the", "west"])).toEqual(["rises", "east", "sets", "west"]);
    expect(symmetricDifference(["sun", "rises", "in", "the", "south"], ["sun", "sets", "in", "the", "west"])).not.toEqual(["rises", "east", "sets", "west"]);
    expect(symmetricDifference({star:"sun",does:"rises",direction:"east"},{star:"sun", does:"sets",direction:"west"})).toEqual({does:"sets", direction:"west"});
    expect(symmetricDifference({a: {a: 1, b: {c: 2,d:3}}, b: 2, c: 3, d: 4, e: 5},{e: 5, f: 6, c: 3, a: {a: 1, b: {c: 2, d: 3}}})).toEqual({ b: 2, d: 4, f: 6 });
});
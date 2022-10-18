import {difference, intersection, isSubSet, isSuperSet, symmetricDifference, union} from "../src/index";


test('subset and superset', () => {
    expect(isSuperSet([1, 8, 3, 5], [3, 8])).toBe(true);
    expect(isSuperSet([1, 8, 3, 5], [3, 9])).toBe(false);
    expect(isSuperSet(['apple', 'orange', 'banana'], ['banana'])).toBe(true);
    expect(isSuperSet([10, 30, 60, 70], [20, 50])).toBe(false)
    expect(isSubSet([4, 5], [1, 9, 4, 8, 34, 43, 5])).toBe(true);
    expect(isSubSet(["red", "blue"], ["violet", "indigo", "blue", "green", "yellow", "orange", "red"])).toBe(true);
    expect(isSubSet(["red", "blues"], ["violet", "indigo", "blue", "green", "yellow", "orange", "red"])).toBe(false);
});

test('union', () => {
    expect(union([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    expect(union([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], true)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(union([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], true)).not.toEqual(![1, 2, 3, 5, 6, 7, 8, 9, 10]);
    expect(union(["rio", "delhi", "nairobi"], ["morocco", "algeria", "texas"])).toEqual(new Set(["morocco", "algeria", "texas", "rio", "delhi", "nairobi",]))
});

test('intersection', () => {
    expect(intersection([67, 21, 52, 78, 32, 321, 98, 97], [342, 52, 63, 89, 21])).toEqual(new Set([21, 52]))
    expect(intersection([67, 21, 52, 78, 32, 321, 98, 97], [342, 52, 63, 89, 21], true)).toEqual([21, 52]);
    expect(intersection(["yellow", "orange", "red"], ["blue", "red", "green"])).toEqual(new Set(["red"]));
    expect(intersection(["yellow", "orange", "red"], ["blue", "redis", "green"])).not.toEqual(new Set(["red"]));
});

test('difference', () => {
    expect(difference([43, 562, 223, 652, 1], [43, 42, 524, 542, 100, 42, 52])).toEqual(new Set([1, 223, 562, 652]));
    expect(difference([43, 562, 223, 652, 1], [43, 42, 524, 542, 100, 42, 52])).not.toEqual(new Set([223, 562, 652]));
    expect(difference(["ant", "lizard", "tree"], ["table", "mug", "tree", "brush", "hose"])).toEqual(new Set(["ant", "lizard"]));
    expect(difference(["ant", "lizard", "tree"], ["table", "mug", "tree", "brush", "hose"], true)).toEqual(["ant", "lizard"]);
});

test('symmetric difference', () => {
    expect(symmetricDifference([0, 1, 2, 3, 4], [5, 6, 7, 8, 9])).toEqual(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    expect(symmetricDifference([0, 1, 2, 3, 4], [5, 6, 7, 8, 9], true)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(symmetricDifference(["sun", "rises", "in", "the", "east"], ["sun", "sets", "in", "the", "west"])).toEqual(new Set(["rises", "east", "sets", "west"]));
    expect(symmetricDifference(["sun", "rises", "in", "the", "south"], ["sun", "sets", "in", "the", "west"])).not.toEqual(new Set(["rises", "east", "sets", "west"]));
});
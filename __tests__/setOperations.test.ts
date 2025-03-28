import {test, expect, describe} from "vitest";
import {difference, intersection, isDisjoint, isSubset, isSuperset, symmetricDifference, union} from "@/main";

describe("set-operations", () => {

    test("isSuperset", () => {
        expect(isSuperset([1, 8, 3, 5], [3, 8])).toBe(true);
        expect(isSuperset(new Set([1, 8, 3, 5]), new Set([3, 8]))).toBe(true);
        expect(isSuperset([1, 8, 3, 5], [3, 9])).toBe(false);
        expect(isSuperset(new Set([1, 8, 3, 5]), new Set([3, 9]))).toBe(false);
        expect(isSuperset(["apple", "orange", "banana"], ["banana"])).toBe(true);
        expect(isSuperset([10, 30, 60, 70], [20, 50])).toBe(false);
        expect(isSuperset({a: 1, b: 2, c: 3}, {b: 2, c: 3})).toBe(true);
        expect(isSuperset({a: 1, b: 2, c: 3}, {b: 3, c: 3})).toBe(false);
        expect(isSuperset({id: "xyz", name: "john doe", age: 59, work: "janitor"}, {
            id: "xyz",
            work: "janitor"
        })).toBe(true);
        expect(isSuperset({id: "xyz", name: "john doe", age: 59, work: "janitor"}, {
            id: "xyz",
            work: "janitor",
            likes: "football"
        })).toBe(false);
    });

    test("isSubset", () => {
        expect(isSubset([4, 5], [1, 9, 4, 8, 34, 43, 5])).toBe(true);
        expect(isSubset(["red", "blue"], ["violet", "indigo", "blue", "green", "yellow", "orange", "red"])).toBe(true);
        expect(isSubset(["red", "blues"], ["violet", "indigo", "blue", "green", "yellow", "orange", "red"])).toBe(false);
        expect(isSubset({a: 1, b: 2, c: 3}, {b: 2, c: 3})).toBe(false);
        expect(isSubset({b: 2, c: 3}, {a: 1, b: 2, c: 3},)).toBe(true);
        expect(isSubset({id: "xyz", work: "janitor"}, {
            id: "xyz",
            name: "john doe",
            age: 59,
            work: "janitor"
        })).toBe(true);
    });

    test("isDisjoint", () => {
        expect(isDisjoint({a: 1, b: 2, c: 3}, {d: 4, e: 5})).toBe(true);
        expect(isDisjoint({a: 1, b: 2, c: 3}, {c: 3, d: 4, e: 4})).toBe(false);
        expect(isDisjoint({d: 4, e: 5}, {a: 1, b: 2, c: 3})).toBe(true);
        expect(isDisjoint({c: 3, d: 4, e: 4}, {a: 1, b: 2, c: 3})).toBe(false);
        expect(isDisjoint([2, 3, 5, 7, 11, 13, 17, 19], [1, 4, 9, 16])).toBe(true);
        expect(isDisjoint([4, 6, 8, 9, 10, 12, 14, 15, 16, 18], [1, 4, 9, 16])).toBe(false);
        expect(isDisjoint(new Set([2, 3, 5, 7, 11, 13, 17, 19]), new Set([1, 4, 9, 16]))).toBe(true);
        expect(isDisjoint(new Set([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]), new Set([1, 4, 9, 16]))).toBe(false);
    });

    test("union", () => {
        expect(union([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(union(new Set([1, 2, 3, 4, 5]), new Set([6, 7, 8, 9, 10]))).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
        expect(union([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).not.toEqual([1, 2, 3, 5, 6, 7, 8, 9, 10]);
        expect(union(new Set([1, 2, 3, 4, 5]), new Set([6, 7, 8, 9, 10]))).not.toEqual(new Set([1, 2, 3, 5, 6, 7, 8, 9, 10]));
        expect(union(["rio", "delhi", "nairobi"], ["morocco", "algeria", "texas"])).toEqual(["rio", "delhi", "nairobi", "morocco", "algeria", "texas"]);
        expect(union({id: "xyz", name: "john doe"}, {age: "59", work: "developer"})).toEqual({
            id: "xyz",
            name: "john doe",
            age: "59",
            work: "developer"
        });
        expect(union({firstname: "john", lastname: "doe"}, {
            age: 59,
            hobbies: ["fishing", "cycling"]
        })).toEqual({firstname: "john", lastname: "doe", age: 59, hobbies: ["fishing", "cycling"]});

    });

    test("intersection", () => {
        expect(intersection([67, 21, 52, 78, 32, 321, 98, 97], [342, 52, 63, 89, 21])).toEqual([52, 21]);
        expect(intersection([67, 21, 52, 78, 32, 321, 98, 97], [342, 52, 63, 89])).not.toEqual([52, 21]);
        expect(intersection(new Set([67, 21, 52, 78, 32, 321, 98, 97]), new Set([342, 52, 63, 89, 21]))).toEqual(new Set([21, 52]));
        expect(intersection(new Set([67, 21, 52, 78, 32, 321, 98, 97]), new Set([342, 52, 63, 89]))).not.toEqual(new Set([21, 52]));
        expect(intersection(["yellow", "orange", "red"], ["blue", "red", "green"])).toEqual(["red"]);
        expect(intersection(["yellow", "orange", "red"], ["blue", "redis", "green"])).not.toEqual(["red"]);
        expect(intersection({a: {a: 1, b: {c: 2, d: 3}}, b: 2, c: 3, d: 4, e: 5}, {
            e: 5,
            f: 6,
            c: 3,
            a: {a: 1, b: {c: 2, d: 3}}
        })).toEqual({a: {a: 1, b: {c: 2, d: 3}}, c: 3, e: 5});
        expect(intersection({a: {a: 1, b: {c: 2}}, b: 2, c: 3, d: 4, e: 5}, {
            e: 5,
            f: 6,
            c: 3,
            a: {a: 1, b: {c: 2, d: 3}}
        })).toEqual({c: 3, e: 5});
    });

    test("difference", () => {
        expect(difference([43, 562, 223, 652, 1], [43, 42, 524, 542, 100, 42, 52])).toEqual([562, 223, 652, 1]);
        expect(difference(new Set([43, 562, 223, 652, 1]), new Set([43, 42, 524, 542, 100, 42, 52]))).toEqual(new Set([562, 223, 652, 1]));
        expect(difference([43, 562, 223, 652, 1], [43, 42, 524, 542, 100, 42, 52])).not.toEqual([223, 562, 652]);
        expect(difference(new Set([43, 562, 223, 652, 1]), new Set([43, 42, 524, 542, 100, 42, 52]))).not.toEqual(new Set([223, 562, 652]));
        expect(difference(["ant", "lizard", "tree"], ["table", "mug", "tree", "brush", "hose"])).toEqual(["ant", "lizard"]);
        expect(difference(["ant", "lizard", "tree"], ["table", "mug", "tree", "brush", "hose"])).toEqual(["ant", "lizard"]);
        expect(difference({a: {a: 1, b: {c: 2, d: 3}}, b: 2, c: 3, d: 4, e: 5}, {
            e: 5,
            f: 6,
            c: 3,
            a: {a: 1, b: {c: 2, d: 3}}
        })).toEqual({b: 2, d: 4});
        expect(difference({a: {a: 1, b: {c: 2}}, b: 2, c: 3, d: 4, e: 5}, {
            e: 5,
            f: 6,
            c: 3,
            a: {a: 1, b: {c: 2, d: 3}}
        })).toEqual({a: {a: 1, b: {c: 2}}, b: 2, d: 4});
        expect(difference({a: {a: 1, b: {c: 2, d: 3}}, b: 2, c: 3, d: 4, e: 5}, {
            e: 5,
            f: 6,
            c: 3,
            a: {a: 1, b: {c: 2, d: 3}}
        })).not.toEqual({a: {a: 1, b: {c: 2}}, b: 2, d: 4});
    });

    test("symmetricDifference", () => {
        expect(symmetricDifference([0, 1, 2, 3, 4], [5, 6, 7, 8, 9])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(symmetricDifference(new Set([0, 1, 2, 3, 4]), new Set([5, 6, 7, 8, 9]))).toEqual(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
        expect(symmetricDifference(["sun", "rises", "in", "the", "east"], ["sun", "sets", "in", "the", "west"])).toEqual(["rises", "east", "sets", "west"]);
        expect(symmetricDifference(new Set(["sun", "rises", "in", "the", "east"]), new Set(["sun", "sets", "in", "the", "west"]))).toEqual(new Set(["rises", "east", "sets", "west"]));
        expect(symmetricDifference(["sun", "rises", "in", "the", "south"], ["sun", "sets", "in", "the", "west"])).not.toEqual(["rises", "east", "sets", "west"]);
        expect(symmetricDifference(new Set(["sun", "rises", "in", "the", "south"]), new Set(["sun", "sets", "in", "the", "west"]))).not.toEqual(new Set(["rises", "east", "sets", "west"]));
        expect(symmetricDifference({star: "sun", does: "rises", direction: "east"}, {
            star: "sun",
            does: "sets",
            direction: "west"
        })).toEqual({does: "sets", direction: "west"});
        expect(symmetricDifference({a: {a: 1, b: {c: 2, d: 3}}, b: 2, c: 3, d: 4, e: 5}, {
            e: 5,
            f: 6,
            c: 3,
            a: {a: 1, b: {c: 2, d: 3}}
        })).toEqual({b: 2, d: 4, f: 6});
    });

});
import {isEqual} from "lodash-es";
import {isSet, isObject} from "@/utils";
import type {SetOps} from "@/types";

const invalidArgumentMessage = "Invalid argument!";

const isSuperset: SetOps<unknown> = (A, B) => {
    if (isObject(A) && isObject(B)) {
        for (const key in B) {
            if (!isEqual(B[key], A[key])) {
                return false;
            }
        }
        return true;
    } else if (Array.isArray(A) && Array.isArray(B)) {
        return new Set(A).isSupersetOf(new Set(B));
    } else if (isSet(A) && isSet(B)) {
        return A.isSupersetOf(B);
    } else {
        throw new Error(invalidArgumentMessage);
    }
};

const isSubset: SetOps<unknown> = (A, B) => {
    return isSuperset(B, A);
};

const isDisjoint: SetOps<unknown> = (A, B) => {
    if (isObject(A) && isObject(B)) {
        for (const key in A) {
            if (isEqual(B[key], A[key])) {
                return false;
            }
        }
        return true;
    } else if (Array.isArray(A) && Array.isArray(B)) {
        return new Set(A).isDisjointFrom(new Set(B));
    } else if (isSet(A) && isSet(B)) {
        return A.isDisjointFrom(B);
    } else {
        throw new Error(invalidArgumentMessage);
    }
};


const union: SetOps<unknown> = (A, B) => {
    if (isObject(A) && isObject(B)) {
        return {...A, ...B};
    } else if (Array.isArray(A) && Array.isArray(B)) {
        return Array.from(new Set(A).union(new Set(B)));
    } else if (isSet(A) && isSet(B)) {
        return A.union(B);
    } else {
        throw new Error(invalidArgumentMessage);
    }
};
union(new Set(["rio", "delhi", "nairobi"]), new Set(["morocco", "algeria", "texas"])); //?

const intersection: SetOps<unknown> = (A, B) => {
    if (isObject(A) && isObject(B)) {
        const intersectionElements: { [key: string]: any } = {};
        for (const key in A) {
            if (isEqual(A[key], B[key])) {
                intersectionElements[key] = A[key];
            }
        }
        return intersectionElements;
    } else if (Array.isArray(A) && Array.isArray(B)) {
        return Array.from(new Set(A).intersection(new Set(B)));
    } else if (isSet(A) && isSet(B)) {
        return A.intersection(B);
    } else {
        throw new Error(invalidArgumentMessage);
    }
};

const difference: SetOps<unknown> = (A, B) => {
    if (isObject(A) && isObject(B)) {
        const differenceElements: { [key: string]: any } = {};
        for (const key in A) {
            if (!isEqual(A[key], B[key])) {
                differenceElements[key] = A[key];
            }
        }
        return differenceElements;
    } else if (Array.isArray(A) && Array.isArray(B)) {
        return Array.from(new Set(A).difference(new Set(B)));
    } else if (isSet(A) && isSet(B)) {
        return A.difference(B);
    } else {
        throw new Error(invalidArgumentMessage);
    }
};

const symmetricDifference: SetOps<unknown> = (A, B) => {
    if (isObject(A) && isObject(B)) {
        return {...difference(A, B) as {}, ...difference(B, A) as {}};
    } else if (Array.isArray(A) && Array.isArray(B)) {
        return Array.from(new Set(A).symmetricDifference(new Set(B)));
    } else if (isSet(A) && isSet(B)) {
        return A.symmetricDifference(B);
    } else {
        throw new Error(invalidArgumentMessage);
    }
};

export {isSubset, isSuperset, isDisjoint, union, intersection, difference, symmetricDifference};
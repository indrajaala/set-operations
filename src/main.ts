import {isEqual} from "lodash-es";

type SubSuperOps = (A: any[] | { [key: string]: any }, B: any[] | { [key: string]: any }) => boolean;
type SetOps = (A: any[] | { [key: string]: any }, B: any[] | { [key: string]: any }) => any[] | { [key: string]: any };


const isSuperSet: SubSuperOps = (A, B) => {

    if (typeof A === 'object' && !Array.isArray(A) && typeof B === 'object' && !Array.isArray(B)) {
        for (let key in B) {
            if (!isEqual(B[key], A[key])) {
                return false;
            }
        }
        return true;
    } else if (Array.isArray(A) && Array.isArray(B)) {
        const setA = new Set(A);
        const setB = new Set(B);
        for (let item of setB) {
            if (!setA.has(item)) {
                return false
            }
        }
        return true
    } else {
        throw new Error("Invalid argument type!")
    }
};

const isSubSet: SubSuperOps = (A, B) => {
    return isSuperSet(B, A);
};

const union: SetOps = (A, B): any[] | { [key: string]: any } => {
    if (typeof A === 'object' && !Array.isArray(A) && typeof B === 'object' && !Array.isArray(B)) {
        return {...A, ...B};

    } else if (Array.isArray(A) && Array.isArray(B)) {
        const setA = new Set(A);
        const setB = new Set(B);
        const union = new Set([...setA, ...setB]);
        return [...union];
    } else {
        throw new Error("Invalid argument type!")
    }

}

const intersection: SetOps = (A, B): any[] | { [key: string]: any } => {
    if (typeof A === 'object' && !Array.isArray(A) && typeof B === 'object' && !Array.isArray(B)) {
        const intersectionElements: { [key: string]: any } = {};
        for (let key in A) {
            if (isEqual(A[key], B[key])) {
                intersectionElements[key] = A[key]
            }

        }
        return intersectionElements;
    } else if (Array.isArray(A) && Array.isArray(B)) {
        const setA = new Set(A);
        const setB = new Set(B);
        const intersection = new Set([...setA].filter(x => setB.has(x)));
        return [...intersection];
    } else {
        throw new Error("Invalid argument type!")
    }
}

const difference: SetOps = (A, B): any[] | { [key: string]: any } => {
    if (typeof A === 'object' && !Array.isArray(A) && typeof B === 'object' && !Array.isArray(B)) {
        const differenceElements: { [key: string]: any } = {};
        for (let key in A) {
            if (!isEqual(A[key], B[key])) {
                differenceElements[key] = A[key]
            }
        }
        return differenceElements;
    } else if (Array.isArray(A) && Array.isArray(B)) {

        const setA = new Set(A);
        const setB = new Set(B);
        const difference = new Set([...setA].filter(x => !setB.has(x)));
        return [...difference];

    } else {
        throw new Error("Invalid argument type!")
    }
}

const symmetricDifference: SetOps = (A, B): any[] | { [key: string]: any } => {
    if (typeof A === 'object' && !Array.isArray(A) && typeof B === 'object' && !Array.isArray(B)) {
        return {...difference(A, B), ...difference(B, A)};
    } else if (Array.isArray(A) && Array.isArray(B)) {
        const symmetricDifference = new Set([...difference(A, B) as any[], ...difference(B, A) as any[]]);
        return [...symmetricDifference];
    } else {
        throw new Error("Invalid argument type!")
    }
}

export {isSubSet, isSuperSet, union, intersection, difference, symmetricDifference};
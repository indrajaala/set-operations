import {isEqual} from "lodash-es";

type AllowedTypes<T = any> = T[] | Set<T> | { [key: string]: T}
type SubSuperOps = (A: AllowedTypes, B: AllowedTypes) => boolean;
type SetOps<T = unknown> = (A: AllowedTypes<T>, B: AllowedTypes<T>) => AllowedTypes<T>;
type StringIndexable = { [key: string]: any }


function isSet(x:any): x is Set<unknown> { return x instanceof Set }
function isNonArrayObject<T = any>(o: any): o is { [key: string]: T} { return Object.prototype.toString.call(o) === "[object Object]" }
const bothMatches = (predicate : (x:any) => boolean) => (A:any,B:any) => predicate(A) && predicate(B)
const bothAreOfTypeSet = bothMatches(isSet)

const isSuperSetObject = (A:StringIndexable, B:StringIndexable) => {
        for (let key in B) {
            if (!isEqual(B[key], A[key])) {
                return false;
            }
        }
        return true;
}

const isSuperSet: SubSuperOps = (A, B) => {
    if(bothAreOfTypeSet(A,B)) {
        return isSuperSet( [...A.values()], [...B.values()])
    }

    if (isNonArrayObject(A) && isNonArrayObject(B)) {
        return isSuperSetObject(A,B)
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

const union: SetOps = (A, B) => {
    if(isSet(A) && isSet(B)) {
        return new Set(union(Array.from(A), Array.from(B)) as Array<any>);
    }

    if (isNonArrayObject(A) && isNonArrayObject(B)) {
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

const intersectObjects = (A:StringIndexable, B: StringIndexable) => {
        const intersectionElements: StringIndexable = {};
        for (let key in A ) {
            if (isEqual( (A as StringIndexable)[key], (B as StringIndexable)[key])) {
                intersectionElements[key] = A[key]
            }

        }
        return intersectionElements;
}
const intersection: SetOps = (A, B) => {
    if(isSet(A) && isSet(B)) {
        return new Set(intersection(Array.from(A), Array.from(B)) as Array<any>);
    }

    if (isNonArrayObject(A) && isNonArrayObject(B)) {
        return intersectObjects(A, B)
    } else if (Array.isArray(A) && Array.isArray(B)) {
        const setA = new Set(A);
        const setB = new Set(B);
        const intersection = new Set([...setA].filter(x => setB.has(x)));
        return [...intersection];
    } else {
        throw new Error("Invalid argument type!")
    }
}

const diffObjects = (A: StringIndexable,B:StringIndexable) => {
        const differenceElements: { [key: string]: any } = {};
        for (let key in A) {
            if (!isEqual(A[key], B[key])) {
                differenceElements[key] = A[key]
            }
        }
        return differenceElements;
}
const difference: SetOps = (A, B) => {
    if(isSet(A) && isSet(B)) {
        return new Set(difference(Array.from(A), Array.from(B)) as Array<any>);
    }

    if (isNonArrayObject(A) && isNonArrayObject(B)) {
        return diffObjects(A,B)
    } else if (Array.isArray(A) && Array.isArray(B)) {

        const setA = new Set(A);
        const setB = new Set(B);
        const difference = new Set([...setA].filter(x => !setB.has(x)));
        return [...difference];

    } else {
        throw new Error("Invalid argument type!")
    }
}

const symmetricDifference: SetOps = (A, B) => {
    if(isSet(A) && isSet(B)) {
        return new Set(symmetricDifference(Array.from(A), Array.from(B)) as Array<any>);
    }

    if (isNonArrayObject(A) && isNonArrayObject(B)) {
        return {...difference(A, B), ...difference(B, A)};
    } else if (Array.isArray(A) && Array.isArray(B)) {
        const symmetricDifference = new Set([...difference(A, B) as any[], ...difference(B, A) as any[]]);
        return [...symmetricDifference];
    } else {
        throw new Error("Invalid argument type!")
    }
}

export {isSubSet, isSuperSet, union, intersection, difference, symmetricDifference};

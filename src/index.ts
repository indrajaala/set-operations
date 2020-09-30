type SubSuperOp = <T>(arrA: T[], arrB: T[]) => boolean;

const isSuperSet: SubSuperOp = (arrA, arrB) => {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    for (let item of setB) {
        if (!setA.has(item)) {
            return false
        }
    }
    return true
};

const isSubSet: SubSuperOp = (arrA, arrB) => {
    return isSuperSet(arrB, arrA);
};

function union<T>(arrA: T[], arrB: T[]): Set<T>;
function union<T>(arrA: T[], arrB: T[], returnAsArray: true): T[];
function union<T>(arrA: T[], arrB: T[], returnAsArray: false): Set<T>;
function union<T>(arrA:T[], arrB:T[], returnAsArray = false):T[]|Set<T>  {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    const union = new Set([...setA, ...setB]);
    if (returnAsArray) {
        return [...union];
    } else {
        return union;
    }
};

function intersection<T>(arrA: T[], arrB: T[]): Set<T>;
function intersection<T>(arrA: T[], arrB: T[], returnAsArray: true): T[];
function intersection<T>(arrA: T[], arrB: T[], returnAsArray: false): Set<T>;
function intersection<T>(arrA:T[], arrB:T[], returnAsArray = false):T[]|Set<T>  {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    if (returnAsArray) {
        return [...intersection];
    } else {
        return intersection;
    }
};

function difference<T>(arrA: T[], arrB: T[]): Set<T>;
function difference<T>(arrA: T[], arrB: T[], returnAsArray: true): T[];
function difference<T>(arrA: T[], arrB: T[], returnAsArray: false): Set<T>;
function difference<T>(arrA:T[], arrB:T[], returnAsArray = false):T[]|Set<T>  {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    const difference = new Set([...setA].filter(x => !setB.has(x)));
    if (returnAsArray) {
        return [...difference];
    } else {
        return difference;
    }
}

function symmetricDifference<T>(arrA: T[], arrB: T[]): Set<T>;
function symmetricDifference<T>(arrA: T[], arrB: T[], returnAsArray: true): T[];
function symmetricDifference<T>(arrA: T[], arrB: T[], returnAsArray: false): Set<T>;
function symmetricDifference<T>(arrA:T[], arrB:T[], returnAsArray = false):T[]|Set<T>  {
    const symmetricDifference = new Set([...difference(arrA, arrB), ...difference(arrB, arrA)]);
    if (returnAsArray) {
        return [...symmetricDifference];
    } else {
        return symmetricDifference;
    }
};

export {isSubSet, isSuperSet, union, intersection, difference, symmetricDifference};
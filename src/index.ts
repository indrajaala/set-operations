const isSuperSet = <T>(arrA:T[], arrB:T[]):boolean => {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    for (let item of setB) {
        if (!setA.has(item)) {
            return false
        }
    }
    return true
};

const isSubSet = <T>(arrA:T[], arrB:T[]):boolean => {
    return isSuperSet(arrB, arrA);
};

const union = <T>(arrA: T[], arrB: T[], returnAsArray?: boolean): T[] | Set<T> => {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    const union = new Set([...setA, ...setB]);
    if (returnAsArray) {
        return [...union];
    } else {
        return union;
    }
}

const intersection = <T>(arrA: T[], arrB: T[], returnAsArray?: boolean): T[] | Set<T> => {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    if (returnAsArray) {
        return [...intersection];
    } else {
        return intersection;
    }
}

const difference = <T>(arrA: T[], arrB: T[], returnAsArray?: boolean): T[] | Set<T> => {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    const difference = new Set([...setA].filter(x => !setB.has(x)));
    if (returnAsArray) {
        return [...difference];
    } else {
        return difference;
    }
}

const symmetricDifference = <T>(arrA: T[], arrB: T[], returnAsArray?: boolean): T[] | Set<T> => {
    const symmetricDifference = new Set([...difference(arrA, arrB), ...difference(arrB, arrA)]);
    if (returnAsArray) {
        return [...symmetricDifference];
    } else {
        return symmetricDifference;
    }
}

export {isSubSet, isSuperSet, union, intersection, difference, symmetricDifference};
type SubSuperOp = (arrA: any[], arrB: any[]) => boolean;

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

type SetOp = (arrA: any[], arrB: any[], returnAsArray?: boolean) => Set<any> | any[];

const union: SetOp = (arrA, arrB, returnAsArray = false) => {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    const union = new Set([...setA, ...setB]);
    if (returnAsArray) {
        return [...union];
    } else {
        return union;
    }
};

const intersection: SetOp = (arrA, arrB, returnAsArray = false) => {
    const setB = new Set(arrB);
    const intersection = new Set(arrA.filter(x => setB.has(x)));
    if (returnAsArray) {
        return [...intersection];
    } else {
        return intersection;
    }
};

const difference: SetOp = (arrA, arrB, returnAsArray = false) => {
    const setB = new Set(arrB);
    const difference = new Set(arrA.filter(x => !setB.has(x)));
    if (returnAsArray) {
        return [...difference];
    } else {
        return difference;
    }
}

const symmetricDifference: SetOp = (arrA, arrB, returnAsArray = false) => {
    const symmetricDifference = new Set([...difference(arrA, arrB), ...difference(arrB, arrA)]);
    if (returnAsArray) {
        return [...symmetricDifference];
    } else {
        return symmetricDifference;
    }
};

export {isSubSet, isSuperSet, union, intersection, difference, symmetricDifference};
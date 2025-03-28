const isObject = (val: unknown): val is Record<string, unknown> => {
    return Object.prototype.toString.call(val) === "[object Object]";
};

const isSet = (val: unknown): val is Set<unknown> => {
    return Object.prototype.toString.call(val) === "[object Set]";
};

export {isObject, isSet};
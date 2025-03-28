type AllowedTypes<T> = T[] | { [key: string]: T } | Set<T>;
type SetOps<U> = <T extends AllowedTypes<U>>(A: T, B: T) => AllowedTypes<U> | boolean;
export type {SetOps};
type AllowedTypes<T = unknown> = Array<T> | Record<string, T> | Set<T>;
type SetOps = <T extends AllowedTypes>(A: T, B: T) => AllowedTypes | boolean;
export type {SetOps};
import pkg from "./package.json";
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.browser,
            format: 'umd',
            name: "setOperations"
        },
        {
            file: pkg.main,
            format: "cjs",
        },
        {
            file: pkg.module,
            format: 'es',
        }
    ],
    plugins: [typescript()]
};
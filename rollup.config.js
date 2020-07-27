import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: [{
        file: "dist/index.js",
        format: 'umd',
        name: "setOperations"
    },
        {
            file: 'dist/index.esm.js',
            format: 'es',
        }
    ],
    plugins: [typescript()]
};
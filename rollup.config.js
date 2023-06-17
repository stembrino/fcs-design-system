import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const packageJson = require("./package.json");

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    typescript({
      declaration: true, // Generate type declarations
      declarationDir: 'dist/types',
      exclude: 'node_modules/**',
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    postcss(),
  ],
  external: ['react', 'react-dom'], 
};

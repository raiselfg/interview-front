import next from 'eslint-config-next';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  ...next,
  {
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/self-closing-comp': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: prettier,
    },
  },
];

export default eslintConfig;

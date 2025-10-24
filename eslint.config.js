import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          trailingComma: 'es5',
          printWidth: 100,
        },
      ],
    },
  },
];

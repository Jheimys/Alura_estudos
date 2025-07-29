import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,  // sem alteração aqui (browser scope para React)
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['tailwind.config.js'],         // <== NOVO bloco para tailwind.config.js
    languageOptions: {
      globals: globals.node,               // <== usar globais do Node.js para reconhecer 'module'
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'script',              // <== script para CommonJS (tailwind.config.js usa esse padrão)
      },
    },
    rules: {
      'no-undef': 'off',                   // <== desliga erro no-undef para este arquivo
    },
  },
]

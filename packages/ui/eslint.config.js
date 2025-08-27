import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  // ESLint配置文件本身不需要项目配置
  {
    files: ['eslint.config.js'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
    },
  },
  // 应用程序代码和入口文件
  {
    files: ['src/**/*.{ts,tsx}', 'index.ts'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.app.json'],
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // Vite配置文件
  {
    files: ['vite.config.ts'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.node.json'],
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
])

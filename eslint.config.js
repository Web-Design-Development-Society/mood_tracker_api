import globals, { es2025 } from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      semi: ["warn", "always"], // Add or modify this line
    },
    env: {
      es2025: true,
      node: true
    }
  },
  pluginJs.configs.recommended,
];
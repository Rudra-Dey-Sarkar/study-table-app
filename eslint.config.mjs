import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "react/no-unescaped-entities":["warn"],
      "@typescript-eslint/no-unused-vars": ["warn"],
      "react-hooks/exhaustive-deps": ["warn"],
      "@typescript-eslint/no-require-imports": ["warn"],
      "@typescript-eslint/no-explicit-any": ["off"],
    },
  },
];

export default eslintConfig;

import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { 
    files: ["**/*.js"], 
    languageOptions: { 
      sourceType: "module", // Change this to "module"
      globals: { ...globals.node, ...globals.browser }
    }
  },
  pluginJs.configs.recommended,
];

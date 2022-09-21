/* eslint-disable import/no-anonymous-default-export */
import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss"; // import postcss plugin

export default [
  {
    input: "src/components/index.ts",
    output: [
      {
        file: "playground/src/component-lib/index.js",
        format: "esm",
        banner: "/* eslint-disable */",
      },
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      postcss(), // use postcss plugin
      del({ targets: ["dist/*", "playground/src/component-lib"] }),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];

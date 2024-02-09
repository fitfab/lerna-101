// import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
// import terser from "@rollup/plugin-terser"
import commonjs from "@rollup/plugin-commonjs"

import * as fs from "fs"
import path from "path"

const PACKAGE_NAME = process.cwd()
const pkg = JSON.parse(
  fs.readFileSync(path.join(PACKAGE_NAME, "package.json"), "utf-8")
)

console.log(pkg)
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
}
const extensions = [".js", ".ts", ".tsx"]

const nodeOptions = {
  extensions,
}
const typescriptOptions = {
  tsconfig: `${PACKAGE_NAME}/tsconfig.json`,
  declaration: true,
  declarationDir: ".",
  emitDeclarationOnly: true,
  declarationMap: true,
}

export default {
  input: `${PACKAGE_NAME}/lib/index.ts`,
  external: [...Object.keys(pkg.peerDependencies)],
  output: [
    {
      file: `dist/${pkg.main}`,
      format: "cjs",
    },
    {
      file: `dist/${pkg.module}`,
      format: "es",
    },
  ],
  plugins: [
    nodeResolve(nodeOptions),
    typescript(typescriptOptions),
    // excludeDependenciesFromBundle({ peerDependencies: true }),
    // babel(babelOptions),
    commonjs(commonjsOptions),
    // terser(),
  ],
}

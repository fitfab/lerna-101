import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
// import terser from "@rollup/plugin-terser"

import * as fs from "fs"
import path from "path"

const PACKAGE_NAME = process.cwd()
console.log("🚀 ~ PACKAGE_NAME:", PACKAGE_NAME)
const pkg = JSON.parse(
  fs.readFileSync(path.join(PACKAGE_NAME, "package.json"), "utf-8")
)

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
      file: `dist/${pkg.module}`,
      format: "es",
    },
  ],
  plugins: [
    nodeResolve(nodeOptions),
    typescript(typescriptOptions),
    // terser(),
  ],
}

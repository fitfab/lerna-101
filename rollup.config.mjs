import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
// import terser from "@rollup/plugin-terser"

import * as fs from "fs"
import path from "path"

const PACKAGE_DIR = process.cwd()
console.log("🚀 ~ PACKAGE_NAME:", PACKAGE_DIR)

const pkg = JSON.parse(
  fs.readFileSync(path.join(PACKAGE_DIR, "package.json"), "utf-8")
)

console.log("🚀 ~ `pkg.module`:", pkg.module)

const extensions = [".js", ".ts", ".tsx"]

const nodeOptions = {
  extensions,
}
const typescriptOptions = {
  tsconfig: `${PACKAGE_DIR}/tsconfig.json`,
  declaration: true,
  declarationDir: ".",
  emitDeclarationOnly: true,
  declarationMap: true,
}

export default {
  input: `${PACKAGE_DIR}/lib/index.ts`,
  external: [...Object.keys(pkg.peerDependencies)],
  output: [
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [
    nodeResolve(nodeOptions),
    typescript(typescriptOptions),
    // terser(),
  ],
}

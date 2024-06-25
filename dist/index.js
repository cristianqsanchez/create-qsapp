#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/tsup@8.1.0_typescript@5.5.2/node_modules/tsup/assets/cjs_shims.js
var getImportMetaUrl = () => typeof document === "undefined" ? new URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
var importMetaUrl = /* @__PURE__ */ getImportMetaUrl();

// index.ts
var import_node_path = __toESM(require("path"));
var import_promises = require("fs/promises");
var import_node_url = require("url");
var import_picocolors = __toESM(require("picocolors"));
var import_prompts = __toESM(require("prompts"));
var TEMPLATES = [
  {
    title: "Next.js + Shadcn/ui + ESlint",
    value: "next-shadcn-eslint"
  },
  {
    title: "React.js + Vite + ESlint",
    value: "react-tw-eslint"
  }
];
async function main() {
  const project = await (0, import_prompts.default)(
    [
      {
        type: "text",
        name: "name",
        message: "What are you cooking?"
      },
      {
        type: "select",
        name: "template",
        message: "Which kind of stack would you like to use?",
        choices: TEMPLATES
      }
    ],
    {
      onCancel: () => {
        console.log("\nBye \u{1F44F}\n");
        process.exit(0);
      }
    }
  );
  const template = import_node_path.default.join(
    import_node_path.default.dirname((0, import_node_url.fileURLToPath)(importMetaUrl)),
    "templates",
    project.template
  );
  const destination = import_node_path.default.join(process.cwd(), project.name);
  await (0, import_promises.cp)(import_node_path.default.join(template), destination, { recursive: true });
  console.log(import_picocolors.default.bold(import_picocolors.default.blue(`
  Project ${project.name} initialized!`)));
  console.log(import_picocolors.default.cyan(`    template copied ${project.template}`));
  console.log(import_picocolors.default.black(`
    ${import_picocolors.default.bgBlue(" Run \u{1F680} \n")}`));
  console.log(`    - ${import_picocolors.default.blue(`cd ${project.name}`)}`);
  console.log(`    - ${import_picocolors.default.blue(`pnpm install`)}`);
  console.log(`    - ${import_picocolors.default.blue(`pnpm run dev`)}`);
  console.log("\n    Good cooking!\n");
}
main();
//# sourceMappingURL=index.js.map
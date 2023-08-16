import type { Plugin } from "vite";
import type { PluginOptions } from "./types.js";
import { DEFAULT_PLUGIN_OPTIONS } from "./common.js";

export default function (options: PluginOptions): Plugin {
  const virtualModuleId = "virtual:pwa-assets";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  const pluginOptions = Object.assign({}, DEFAULT_PLUGIN_OPTIONS, options);
  const files: Map<string, Promise<Buffer>> = new Map();

  return {
    name: "rollup-plugin-pwa-images",
    buildStart() {},
    resolveId(source) {
      if (source === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async generateBundle(options, bundle) {},
    async configureServer(server) {},
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        return `
          export default {
            "assets": []
          }
        `;
      }
    },
  };
}

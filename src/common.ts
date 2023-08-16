import { PluginOptions } from "./types.js";

export const DEFAULT_PLUGIN_OPTIONS: Omit<Required<PluginOptions>, "src" | "items"> = {
  maskablePaddingPercent: 0.1,
  mode: "contain",
  background: "#ffffff",
  format: "jpg",
  opaque: false,
  publicPath: "/pwa-images",
};

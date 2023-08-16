type ImageFormats = "png" | "jpg" | "jpeg" | "webp";

type ManifestIconFeatures = "maskable" | "monochrome";
type ImageResizeModes = "cover" | "contain";

type BaseItemOptions = {
  type: "html" | "manifest";
  mode?: ImageResizeModes
  width?: number;
  height?: number;
  size?: number;
  paddingPercent?: number;
  src?: string;
  background?: string;
  opaque?: boolean;
  format?: ImageFormats;
};

interface ManifestItemOptions extends BaseItemOptions {
  type: "manifest";
  features?: ManifestIconFeatures[];
}

interface HTMLItemOptions extends BaseItemOptions {
  type: "html";
  linkrel: string;
  media?: string;
}

export type ItemOptions = ManifestItemOptions | HTMLItemOptions;

export interface PluginOptions {
  items?: ItemOptions[];
  publicPath?: string;
  maskablePaddingPercent?: number;
  mode?: ImageResizeModes;
  src?: string;
  opaque?: boolean;
  background?: string;
  format?: ImageFormats;
}

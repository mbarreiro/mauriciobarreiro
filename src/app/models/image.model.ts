// import { AdditionalProperties, File } from "./common.model";

type AdditionalParam = {
  url: string;
  alt: string;
};
type customRenditions = {
  xxlarge?: File;
  xlarge?: File;
  large?: File;
  medium?: File;
  small?: File;
  xsmall?: File;
};

export interface ImageModel {
  /** image source */
  src: string;
  /** The height of the image */
  height?: number;
  /** The width of the image */
  width?: number;
  /** Enable renditions dynamic and custom*/
  renditions?: boolean;
  /** Enable custom renditions by breakpoint*/
  custom_renditions?: customRenditions;
  /** The file of the image in Contentstack DAM*/
  file?: File;
  /** The external url of the image */
  external_url?: string;
  /** The alt text of the image */
  alt: string;
  /** The loading attribute of the image */
  loading?: "eager" | "lazy";
  /** The object fit of the image */
  object_fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  /** Spacing below */
  spacing_below?: "small" | "regular" | "large" | "none";
  /** Embed SVG */
  embedSvg?: boolean;
  /** Prevent image from scaling beyond its intrinsic size */
  prevent_upscaling?: boolean;
  /** The id of the image */
  id?: string;
  /** The classes of the image */
  classes?: string;
  /** The additional parameters of the image */
  $?: AdditionalParam;
}

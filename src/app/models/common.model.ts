import { ImageModel } from "./image.model";
// import { Seo } from "./pages";

export type AdditionalProperties = {
  [key: string]: unknown;
};

export type Company = {
  name: string;
  logo: File;
  link: Link;
};

export type Link = {
  title: string;
  href: string;
};

export type Socials = {
  type: string;
  link: Link;
};

export interface AuthorModel {
  /** The author name */
  name?: string;
  /** The author date */
  date?: string;
  /** The author title */
  title?: string;
  /** The author company */
  company?: string;
  /** The author image */
  image?: ImageModel;
}
export type File = {
  url?: string;
  content_type?: string;
  title?: string;
  tags?: string[];
  dimension?: {
    width: number;
    height: number;
  };
};

export type PageRef = {
  title: string;
  url: string;
  no_page?: boolean;
  // seo: Seo;
  $: AdditionalProperties;
};

// Define the props for the page function and the metadata function
export type PageParams = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

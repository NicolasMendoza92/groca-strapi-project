
type ImageData = {
  url: string;
  alternativeText?: string;
}

type LinkData = {
  url: string;
  label?: string;
  isExternal?:boolean
}

type Section = {
  id: number;
  image: ImageData;
  heading?: string;
  subheading?: string;
  link?: LinkData;
}

export interface HomeData {
  title: string;
  description: string;
  sections: Section[];
}

type SectionCard = {
  id: number;
  item?: string;
  content?: string;
  image?: ImageData;
}

export interface SobreMiData {
  title?: string;
  description?: string;
  sections?: SectionCard[];
}

export interface ElManualData {
  title?: string;
  description?: string;
}

export type ProductDetial = {
  resume: string;
  link?:LinkData
};

export type Product = {
  id: number;
  slug:string;
  name: string;
  subname:string;
  description: string;
  price: number;
  image: ImageData;
  isActive?:boolean;
  detail?:ProductDetial
};


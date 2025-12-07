
type ImageData = {
  url: string;
  alternativeText?: string;
}

type LinkData = {
  url: string;
  label?: string;
  isExternal?:boolean
}

export interface GrocaContentData{
  title?:string;
  subtitle?:string;
  description?:string;
  intro_paragraphs?:Paragraph[];
  hero_section?:HeroGroca;
  symbols?:SymbolsCard[];
  musical_card?:MusicalCardType;
}

export interface HeroGroca  {
  title?: string;
  subtitle?: string;
  image?: ImageData;
}

export interface SymbolsCard  {
  id: number;
  title?: string;
  description?: string;
  image: ImageData;
}

export type Paragraph = {
  id?: number;
  content?: string | null;
};

export interface MusicalCardType  {
  title?: string;
  description?: string;
  button_link?: LinkData;
}

export interface HomeData {
  title: string;
  description: string;
  logo: ImageData;
  background: ImageData;
}

export type ImageContent = {
  id: number;
  image?: ImageData;
  paragraphs?: Paragraph[];
}

export interface SobreMiData {
  title?: string;
  description?: string;
  sections?: ImageContent[];
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
  subname?:string;
  description: string;
  price: number;
  image: ImageData;
  order: number;
  published?:Date;
  isActive?:boolean;
  detail?:ProductDetial
};


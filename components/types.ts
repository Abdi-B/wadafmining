import { StaticImageData } from "next/image";

export interface OurTeamsI {
  Avatar: {
    src: StaticImageData;
    alt: string;
  };
  name: string;
  role: string;
  description: string;
  contacts?: {
    facebooK: string;
    linkedin: string;
    twitter: string;
  };
}

export interface OurProductI {
  Avatar: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
}

export interface OurServiceI {
  Avatar: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
}

export interface ProductQuestion {
  id: string;
  question: string;
  description: string;
}

export interface PartnersI {
  avatar: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  link: string;
}

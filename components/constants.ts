import { StaticImageData } from "next/image";
import {
  AbdiAbdulshukur,
  CartIcon,
  DangoteImg,
  DigIcon,
  GemedaWorku,
  HabeshaImg,
  KuyuImg,
  MengestuAraya,
  MickiyasYesus,
  NationalImg,
  SamuelHagos,
  SeamsewYilma,
  TruckIcon,
  WaliaImg,
  GemIcon1,
  GemIcon2,
  GemIcon3,
} from "../assets";

import {
  OurTeamsI,
  OurProductI,
  OurServiceI,
  ProductQuestion,
  PartnersI,
} from "./types";

interface productsI {
  icon: StaticImageData;
  title: string;
  description: string;
}

export const services2: productsI[] = [
  {
    title: "Gemstones",
    icon: GemIcon1,
    description:
      "Gemstones are pieces of rock, minerals, and crystals that are used to make jewelry, art, and other objects.",
  },
  {
    title: "Precious Metals",
    icon: GemIcon2,
    description:
      "Precious metals are a type of element that is typically found in the earth's crust. Those are typically rare",
  },
  {
    title: "Construction Minerals",
    icon: GemIcon3,
    description:
      "The mining of minerals used in construction, such as concrete, lime, and gypsum. These minerals are often",
  },

  {
    title: "Industrial Minerals",
    icon: CartIcon,
    description:
      "Industrial or Raw Materials Minerals are used in manufacturing processes or in the extraction of valuable",
  },
];

const ourTeams: OurTeamsI[] = [
  {
    Avatar: {
      alt: "Abdi Abdulshukur",
      src: AbdiAbdulshukur,
    },
    name: "Abdi Abdulshukur",
    description:
      "Abdi is one of the founders and Deputy Manager of Wadaf Ethiopia. Abdi has 5 years of mining construction experience.",
    role: "Deputy Manager",
  },
  {
    Avatar: {
      alt: "Mengestu Araya",
      src: MengestuAraya,
    },
    name: "Mengestu Araya",
    description:
      "Abdi is one of the founders and Deputy Manager of Wadaf Ethiopia. Abdi has 5 years of mining construction experience.",
    role: "Deputy Manager",
  },
  {
    Avatar: {
      alt: "Gemeda Worku",
      src: GemedaWorku,
    },
    name: "Gemeda Worku",
    description:
      "Abdi is one of the founders and Deputy Manager of Wadaf Ethiopia. Abdi has 5 years of mining construction experience.",
    role: "Deputy Manager",
  },
  {
    Avatar: {
      alt: "Mickiyas Yesus",
      src: MickiyasYesus,
    },
    name: "Mickiyas Yesus",
    description:
      "Abdi is one of the founders and Deputy Manager of Wadaf Ethiopia. Abdi has 5 years of mining construction experience.",
    role: "Deputy Manager",
  },
  {
    Avatar: {
      alt: "Samuel Hagos",
      src: SamuelHagos,
    },
    name: "Samuel Hagos",
    description:
      "Abdi is one of the founders and Deputy Manager of Wadaf Ethiopia. Abdi has 5 years of mining construction experience.",
    role: "Deputy Manager",
  },
  {
    Avatar: {
      alt: "Seamsew Yilma",
      src: SeamsewYilma,
    },
    name: "Seamsew Yilma",
    description:
      "Abdi is one of the founders and Deputy Manager of Wadaf Ethiopia. Abdi has 5 years of mining construction experience.",
    role: "Deputy Manager",
  },
];

const ourProducts: OurProductI[] = [
  {
    Avatar: {
      src: GemIcon1,
      alt: "Gemstone",
    },
    title: "Gemstone",
    description:
      "Gemstones are pieces of rock, minerals, and crystals that are used to make jewelry, art, and other objects.",
  },
  {
    Avatar: {
      src: GemIcon2,
      alt: "Precious Metal",
    },
    title: "Precious Metal",
    description:
      "Precious metals are a type of element that is typically found in the earth's crust. Those are typically rare",
  },
  {
    Avatar: {
      src: GemIcon3,
      alt: "Construction Mineral",
    },
    title: "Construction Mineral",
    description:
      "The mining of minerals used in construction, such as concrete, lime, and gypsum. These minerals are often",
  },
  {
    Avatar: {
      src: GemIcon1,
      alt: "Industrial Minerals",
    },
    title: "Industrial Minerals",
    description:
      "Industrial or Raw Materials Minerals are used in manufacturing processes or in the extraction of valuable",
  },
  {
    Avatar: {
      src: GemIcon3,
      alt: "Aggregates",
    },
    title: "Aggregates",
    description:
      "Materials created by the crushing of rocks and the separation of their components. The crushed rocks are",
  },
];

const ourServices: OurServiceI[] = [
  {
    Avatar: {
      src: DigIcon,
      alt: "MINING",
    },
    title: "MINING",
    description:
      "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
  },
  {
    Avatar: {
      src: CartIcon,
      alt: "MACHINARY RENT",
    },
    title: "MACHINARY RENT",
    description:
      "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
  },
  {
    Avatar: {
      src: TruckIcon,
      alt: "TRANPORTATION TRUCKS RENTAL",
    },
    title: "TRANPORTATION TRUCKS RENTAL",
    description:
      "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
  },
];

const productQuestions: ProductQuestion[] = [
  {
    id: "01",
    question: "What type of products does your mining company offer the world?",
    description:
      "Our mining company offers a range of cutting-edge equipment and tools for the mining industry, including drilling equipment, conveyor systems, excavation machinery, and other specialized tools.",
  },
  {
    id: "02",
    question:
      "How does your company prioritize sustainability and safety in the mining industry?",
    description:
      "At our mining company, we understand the importance of balancing profitability with sustainability and safety. That's why we design and manufacture all of our products with safety and sustainability in mind. Our products are built to meet rigorous safety standards and are designed to minimize their impact on the environment.",
  },
  {
    id: "03",
    question:
      "How can your mining products help improve efficiency and profitability for mining operations?",
    description:
      "Our mining products are designed to optimize performance and efficiency, while also reducing operating costs. Our state-of-the-art equipment is built to meet the specific needs of the mining industry and is designed to improve productivity, reduce downtime, and increase overall profitability for our clients. Whether you're looking to improve efficiency, increase productivity, or reduce costs, our products have the solutions you need to succeed.",
  },
];

const partners: PartnersI[] = [
  {
    avatar: {
      src: HabeshaImg,
      alt: "Habesha Cement",
    },
    title: "Habesha Cement",
    link: "https://www.dangotecement.com/",
  },
  {
    avatar: {
      src: KuyuImg,
      alt: "Kuyu Cement",
    },
    title: "Kuyu Cement",
    link: "https://www.dangotecement.com/",
  },
  {
    avatar: {
      src: WaliaImg,
      alt: "Walia Steel Industry",
    },
    title: "Walia Steel Industry",
    link: "https://www.dangotecement.com/",
  },
  {
    avatar: {
      src: NationalImg,
      alt: "National Cement",
    },
    title: "National Cement",
    link: "https://www.dangotecement.com/",
  },
  {
    avatar: {
      src: DangoteImg,
      alt: "Dangote Cement",
    },
    title: "Dangote Cement",
    link: "https://www.dangotecement.com/",
  },
];

export { ourTeams, ourProducts, ourServices, productQuestions, partners };

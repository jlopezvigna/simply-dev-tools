import { AppRoute } from "@/AppRoute";
import { IBoxTool } from "@/component/Card";
import { SortLabel, SortValue } from "./enums";

interface ISortSelect {
  label: SortLabel;
  value: SortValue;
}

interface ISelect {
  label: any;
  value: any;
}

export interface IconProps {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  className?: string;
}

export const SORT: ISortSelect[] = [
  { label: SortLabel.NoSort, value: SortValue.NoSort },
  { label: SortLabel.Az, value: SortValue.Az },
  { label: SortLabel.Za, value: SortValue.Za },
];

export const breakpoints = {
  0: "xs",
  640: "sm",
  768: "md",
  1024: "lg",
  1280: "xl",
};

export const LOREM_IPSUM: ISelect[] = [
  { label: "Paragraphs", value: "paragraphs" },
  { label: "Sentences", value: "sentences" },
  { label: "Words", value: "words" },
];

export interface SideBarRoutes {
  label: string;
  subRoutes: { label: string; href: string }[];
}

export const SIDEBAR_ROUTES: SideBarRoutes[] = [
  {
    label: "Encoders",
    subRoutes: [
      { label: "Url Encode / Decode", href: AppRoute.URL },
      { label: "Base64 Encode / Decode", href: AppRoute.BASE64 },
    ],
  },
  {
    label: "Generators",
    subRoutes: [
      { label: "Lorem Ipsum Generator", href: AppRoute.LOREM_IPSUM },
      { label: "Password Generator", href: AppRoute.PASSWORD },
    ],
  },
  {
    label: "Others",
    subRoutes: [{ label: "Diff List", href: AppRoute.DIFFLIST }],
  },
  {
    label: "Formatters",
    subRoutes: [
      { label: "Timestamp soon", href: AppRoute.ROOT },
      { label: "Clock soon", href: AppRoute.ROOT },
    ],
  },
];

export const tools: IBoxTool[] = [
  {
    label: "Diff List",
    description:
      "Find differences between two lists with various filtering options.",
    href: AppRoute.DIFFLIST,
  },
  {
    label: "Base64 Encode / Decode",
    description: "Convert data to/from Base64 format quickly and easily.",
    href: AppRoute.BASE64,
  },
  {
    label: "Lorem Ipsum Generator",
    description:
      "Create customizable Lorem Ipsum dummy text with options for paragraphs, sentences, and length.",
    href: AppRoute.LOREM_IPSUM,
  },
  {
    label: "QR Code Generator",
    description:
      "Generate QR codes for text, WhatsApp, URLs, and emails effortlessly.",
    href: AppRoute.QR,
  },
  {
    label: "Secure Password Generator",
    description:
      "Generate strong and customizable passwords with options for length, uppercase, lowercase, symbols, and numbers.",
    href: AppRoute.PASSWORD,
  },
  {
    label: "URL Encode - Decode",
    description: "URL Encoder/Decoder Online.",
    href: AppRoute.URL,
  },
  {
    label: "More tools Comming Soon",
    description: "",
    href: AppRoute.ROOT,
  },
];

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
  600: "sm",
  960: "md",
  1280: "lg",
  1920: "xl",
};

export const LOREM_IPSUM: ISelect[] = [
  { label: "Paragraphs", value: "paragraphs" },
  { label: "Sentences", value: "sentences" },
  { label: "Words", value: "words" },
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
    label: "More tools Comming Soon",
    description: "",
    href: AppRoute.ROOT,
  },
];

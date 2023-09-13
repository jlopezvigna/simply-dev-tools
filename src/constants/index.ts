import { SortLabel, SortValue } from "./enums";

interface ISortSelect {
  label: SortLabel;
  value: SortValue;
}

interface ISelect {
  label: any;
  value: any;
}

export const SORT: ISortSelect[] = [
  { label: SortLabel.NoSort, value: SortValue.NoSort },
  { label: SortLabel.Az, value: SortValue.Az },
  { label: SortLabel.Za, value: SortValue.Za },
];

export const LOREM_IPSUM: ISelect[] = [
  { label: "Paragraphs", value: "paragraphs" },
  { label: "Sentences", value: "sentences" },
  { label: "Words", value: "words" },
];

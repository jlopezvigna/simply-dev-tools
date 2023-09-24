import { HeaderTool } from "@/component/seccion/HeaderTool";
import { Metadata } from "next";
import DiffListContent from "./DiffListContent";

export const metadata: Metadata = {
  title:
    "SimplyDevTools Diff: Compare Text & Find Distinctions | Developer's Essential Tool",
  description:
    "Compare text, find differences in text lists. Paste files, click to discover distinctions. Your developer's essential tool.",
  keywords:
    "compare strings, compare text online, diff, diff tool, quick diff, quickdiff, online diff tool, diff checker, diffchecker, text diff, online diff, diff online, text compare, compare text, text compare online compare lists online, compare two lists",
};

export default function DiffListPage() {
  return (
    <>
      <HeaderTool
        pageTitle="Diff List"
        pageDescription="The tool is by default case-insensitive, meaning it treats all items as
        if they are in lowercase. Before performing any operations, duplicate
        entries are removed from each list, leading and trailing spaces are
        removed, and all lists are sorted alphabetically."
      />

      <DiffListContent />
    </>
  );
}

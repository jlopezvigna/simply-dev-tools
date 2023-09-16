import { HeaderTool } from "@/component/seccion/HeaderTool";
import { Metadata } from "next";
import DiffListContent from "./DiffListContent";

export const metadata: Metadata = {
  title: "Diff List - Compare two lists Online | SimplyDevTools",
  description:
    "Compare two lists of names, domains, e-mails with different filters",
  keywords:
    "List Comparison, Diff List Tool, List Differences, Compare Lists Online, List Comparison Tool, Find List Differences, List Diff Checker, List Comparison Online, List Comparison Utility, List Comparison Software, List Comparison Tool Free, Compare Two Lists, List Difference Finder, List Analysis Tool, List Comparison Web App, Online List Comparator, List Sorting Tool, List Filter and Sort, List Comparison Tool Features, List Comparison Examples, compare text, compare strings, compare text online, online diff",
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

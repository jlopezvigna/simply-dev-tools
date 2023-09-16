import { HeaderTool } from "@/component/seccion/HeaderTool";
import { Metadata } from "next";
import LoremIpsumContent from "./LoremIpsumContent";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator Online - SimplyDevTools",
  description: "Free Lorem Ipsum Generator - Create Customizable Dummy Text",
  keywords:
    "Lorem Ipsum Generator, Dummy Text Generator, Generate Lorem Ipsum, Lorem Ipsum Text, Lorem Ipsum Paragraphs, Lorem Ipsum Sentences, Customizable Dummy Text, Lorem Ipsum Online Tool",
};

export default function LoremIpsumPage() {
  return (
    <>
      <HeaderTool
        pageTitle="Generate Lorem Ipsum"
        pageDescription="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
      />

      <LoremIpsumContent />
    </>
  );
}

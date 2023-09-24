import { HeaderTool } from "@/component/seccion/HeaderTool";
import { Metadata } from "next";
import URLContent from "./URLContent";

export const metadata: Metadata = {
  title: "URL Encode and Decode - Online | SimplyDevTools",
  description: "URL Encoder/Decoder Online - Convert Data to/from URL Format",
  keywords: "",
};

export default function UrlPage() {
  return (
    <>
      <HeaderTool
        pageTitle="URL Encode / Decode"
        pageDescription="Encoding is the simple changing of characters within a URL, that can't be used for various reasons, into a standardized code. This is to prevent errors being made in retrieving the resources from a server and allowing sites to properly render on a web browser. Decoding is the opposite."
      />

      <URLContent />
    </>
  );
}

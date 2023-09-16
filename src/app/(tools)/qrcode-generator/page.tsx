import { HeaderTool } from "@/component/seccion/HeaderTool";
import { Metadata } from "next";
import QRCodeContent from "./QRCodeContent";

export const metadata: Metadata = {
  title: "QR Code Generator - Online | SimplyDevTools",
  description:
    "Free Online QR Code Generator to make your own QR Codes. Supports text, url, emails, Whatsapp and more.",
  keywords:
    "QR Code Generator, Create QR Codes, QR Code Creator, QR Code Maker, QR Code Generator Online, QR Code for Text, QR Code for URL, QR Code for Email, QR Code for WhatsApp",
};

export default function QRCodePage() {
  return (
    <>
      <HeaderTool
        pageTitle="QR Generator"
        pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      />

      <QRCodeContent />
    </>
  );
}

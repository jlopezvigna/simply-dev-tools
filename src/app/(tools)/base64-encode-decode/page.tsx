import { HeaderTool } from "@/component/seccion/HeaderTool";
import { Metadata } from "next";
import Base64Content from "./Base64Content";

export const metadata: Metadata = {
  title: "Base64 Encode and Decode - Online | SimplyDevTools",
  description:
    "Base64 Encoder/Decoder Online - Convert Data to/from Base64 Format",
  keywords:
    "base64 encode, encode base64, base64encode, base 64 encode, base64 encoder, base64 decode, decode base64, base64decode, base 64 decode, base64 encode online, encode base64 online, base64encode online, base 64 encode online, base64 encoder online, base64 decode online, decode base64 online, base64decode online, base 64 decod online",
};

export default function Base64Page() {
  return (
    <>
      <HeaderTool
        pageTitle="Base 64 Encode / Decode"
        pageDescription="Base64 is a group of binary-to-text encoding schemes that represent binary data (more specifically, a sequence of 8-bit bytes) in sequences of 24 bits that can be represented by four 6-bit Base64 digits."
      />

      <Base64Content />
    </>
  );
}

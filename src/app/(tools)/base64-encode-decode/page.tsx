import { HeaderTool } from "@/component/seccion/HeaderTool";
import { Metadata } from "next";
import Base64Content from "./Base64Content";

export const metadata: Metadata = {
  title: "Base64 Encode and Decode - Online | SimplyDevTools",
  description:
    "Free Base64 Encoder/Decoder - Convert Data to/from Base64 Format",
  keywords:
    "Base64 Encode, Base64 Decode, Data Encoding, Data Decoding, Online Base64 Tool, Base64 Encoder, Base64 Decoder, Convert to Base64, Convert from Base64",
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

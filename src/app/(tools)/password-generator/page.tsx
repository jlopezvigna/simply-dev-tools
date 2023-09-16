import { HeaderTool } from "@/component/seccion/HeaderTool";
import { Metadata } from "next";
import PasswordGeneratoContent from "./PasswordGeneratoContent";

export const metadata: Metadata = {
  title: "Secure Password Generator - Online | SimplyDevTools",
  description:
    "Generate free customizable strong & secure passwords for all your online accounts with our random password generator",
  keywords:
    "Secure Password Generator, Strong Passwords, Password Generator Tool, Generate Secure Passwords, Password Strength, Password Complexity, Online Password Generator, Create Strong Passwords",
};

export default function PasswordPage() {
  return (
    <>
      <HeaderTool
        pageTitle="Secure Password Generator"
        pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur"
      />
      <PasswordGeneratoContent />
    </>
  );
}

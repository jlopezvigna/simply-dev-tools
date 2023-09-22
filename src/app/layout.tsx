import CookieBanner from "@/component/CookieBanner";
import GoogleAnalytics from "@/component/GoogleAnalytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SimplyDevTools - Daily Developer Tools",
  description:
    "Explore a collection of daily developer tools at SimplyDevTools.com. Encode and decode Base64, generate Lorem Ipsum text, URL encode/decode, create QR codes, and generate secure passwords effortlessly. Simplify your development tasks with our free online tools.",
  keywords:
    "developer tools, Base64 encode, Base64 decode, Lorem Ipsum generator, URL encoding, URL decoding, QR code generator, password generator, web development, coding tools, SimplyDevTools",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <GoogleAnalytics
        GA_MEASUREMENT_ID={process.env.NEXT_GA_MEASUREMENT_ID as string}
      />

      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen">{children}</div>
        </Providers>
        <CookieBanner />
      </body>
    </html>
  );
}

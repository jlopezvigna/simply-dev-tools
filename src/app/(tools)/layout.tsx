import NavBar from "@/component/NavBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="px-8 py-6 md:px-24 md:py-12">{children}</div>
    </>
  );
}

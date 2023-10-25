import { AppRoute } from "@/AppRoute";
import SideBar from "@/component/SideBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="hidden fixed flex-col top-0 left-0 w-0 bg-white h-full border-r md:flex md:w-64">
        <div className="flex items-center h-14 border-b">
          <Link href={AppRoute.ROOT} className="flex items-center gap-1 mx-5">
            <Image
              width={80}
              height={30}
              alt="Simply dev tools"
              src="/simply-light.png"
            />
            <span className="text-sm font-bold simply-logo">Dev Tools</span>
          </Link>
        </div>
        <SideBar />
      </div>
      <div className="fixed flex flex-col top-0 left-0 h-full md:left-64">
        <div className="overflow-y-auto overflow-x-hidden flex-grow px-8 py-6 md:px-24 md:py-12">
          {children}
        </div>
      </div>
    </div>
  );
}

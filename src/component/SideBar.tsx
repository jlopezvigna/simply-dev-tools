"use client";

import { SIDEBAR_ROUTES } from "@/constants";
import { cn } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { TaskIcon } from "./icons/task-icon";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="overflow-y-auto overflow-x-hidden flex-grow">
      <ul className="flex flex-col py-4 space-y-1">
        {SIDEBAR_ROUTES.map((item) => {
          return (
            <React.Fragment key={`folder-${item.label}`}>
              <li className="px-5" key={`item-${item.label}`}>
                <div className="flex flex-row items-center h-8">
                  <span className="inline-flex justify-center items-center">
                    <TaskIcon size={20} />
                  </span>
                  <div className="text-sm font-bold tracking-wide text-gray-500 ml-2">
                    {item.label}
                  </div>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                    {item.subRoutes.length}
                  </span>
                </div>
              </li>
              {item.subRoutes.map((subItem) => {
                return (
                  <li key={`tool-${subItem.label}`}>
                    <Link
                      href={subItem.href}
                      className={cn(
                        "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-secondary-500 pr-6",
                        {
                          "bg-gray-50 text-gray-800 font-bold border-secondary-500":
                            pathname === subItem.href,
                        }
                      )}
                    >
                      <span className="mx-5 text-sm tracking-wide truncate">
                        {subItem.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </React.Fragment>
          );
        })}
      </ul>
    </aside>
  );
}

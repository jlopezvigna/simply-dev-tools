"use client";

import React from "react";
import { ImprovementButton } from "../ImprovementButton";
import { BugButton } from "../BugButton";
import { useBreakpoint } from "@/hook/useBreakpoint";
import SideBar from "../SideBar";
import { useToggle } from "@/hook/useToggle";
import { Button, cn } from "@nextui-org/react";
import { HamburgerIcon } from "../icons/hamburger-icon";
import { CloseIcon } from "../icons/close-icon";

interface IHeaderTool {
  pageTitle: string;
  pageDescription: string;
}

export const HeaderTool: React.FC<IHeaderTool> = ({
  pageTitle,
  pageDescription,
}) => {
  const breakpoint = useBreakpoint();
  const [open, toggle] = useToggle();

  return (
    <>
      <div className="flex justify-between">
        <Button
          isIconOnly
          aria-label="Open Menu"
          size="sm"
          onClick={toggle}
          className="md:hidden"
        >
          <HamburgerIcon strokeWidth={2} />
        </Button>
        <h2 className={`text-2xl font-semibold`}>{pageTitle}</h2>
        <div
          className={cn(
            "fixed top-0 left-0 right-0 h-full bg-white z-10 px-8 py-6 overflow-y-auto overflow-x-hidden",
            {
              "hidden ": !open,
            }
          )}
        >
          <Button isIconOnly size="sm" aria-label="Close Menu" onClick={toggle}>
            <CloseIcon />
          </Button>

          <SideBar />
        </div>

        <div className="flex gap-2">
          <ImprovementButton
            isIconOnly={breakpoint === "sm" || breakpoint === "xs"}
            size="sm"
          />
          <BugButton
            isIconOnly={breakpoint === "sm" || breakpoint === "xs"}
            size="sm"
          />
        </div>
      </div>

      <p className={`mb-8 mt-4 text-sm opacity-50`}>{pageDescription}</p>
    </>
  );
};

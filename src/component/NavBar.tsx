"use client";

import { AppRoute } from "@/AppRoute";
import { breakpoints } from "@/constants";
import useBreakpoint from "@/hook/useBreakPoint";
import {
  Navbar as NextNavBar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import Link from "next/link";
import { BugButton } from "./BugButton";
import { ImprovementButton } from "./ImprovementButton";

export default function NavBar() {
  const breakpoint = useBreakpoint();

  return (
    <NextNavBar maxWidth="xl" className="bg-transparent">
      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand as={Link} href={AppRoute.ROOT}>
          <h3
            aria-label="Simply Dev Tools"
            className="text-xl flex flex-row items-center font-extrabold gap-x-0.5 justify-center text-neutral-900"
          >
            <span className="simply-logo">Simply</span>
            <span>Dev</span>
            <span>Tools</span>
          </h3>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <ImprovementButton isIconOnly={breakpoint === "xs"} size="sm" />
        <BugButton isIconOnly={breakpoint === "xs"} size="sm" />
      </NavbarContent>
    </NextNavBar>
  );
}

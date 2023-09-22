"use client";

import { AppRoute } from "@/AppRoute";
import { useBreakpoint } from "@/hook/useBreakpoint";
import {
  Navbar as NextNavBar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import Image from "next/image";
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
            className="flex flex-row items-center justify-center gap-x-0.5"
          >
            <Image
              src="/simply-light.png"
              alt="simply-logo"
              width={90}
              height={90}
            />
            <span className="simply-logo tool-page-logo">dev tools</span>
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

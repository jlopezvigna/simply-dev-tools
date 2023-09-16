"use client";

import { AppRoute } from "@/AppRoute";
import {
  Navbar as NextNavBar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import Link from "next/link";
import { Feedback } from "./Feedback";
import { DailyToolsIcon } from "./icons/daily-tools-icon";

export default function NavBar() {
  return (
    <NextNavBar isBordered>
      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand as={Link} href={AppRoute.ROOT}>
          <DailyToolsIcon />

          <p className="font-bold text-inherit">Simply Dev Tools</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Feedback />
      </NavbarContent>
    </NextNavBar>
  );
}

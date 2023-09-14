"use client";
import React from "react";
import {
  Navbar as NextNavBar,
  NavbarBrand,
  NavbarContent,
  Input,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { SearchIcon } from "./icons/search-icon";
import { DailyToolsIcon } from "./icons/daily-tools-icon";
import { AppRoute } from "@/AppRoute";
import Link from "next/link";
import { Feedback } from "./Feedback";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <NextNavBar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand as={Link} href={AppRoute.ROOT}>
          <DailyToolsIcon />
          <p className="font-bold text-inherit">NAME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Feedback />
      </NavbarContent>
    </NextNavBar>
  );
}

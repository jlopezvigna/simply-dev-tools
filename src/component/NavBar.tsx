"use client";
import React from "react";
import {
  Navbar as NextNavBar,
  NavbarBrand,
  NavbarContent,
  Input,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { SearchIcon } from "./icons/SearchIcon";
import { DailyToolsIcon } from "./icons/daily-tools-icon";
import { AppRoute } from "@/AppRoute";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <NextNavBar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand as={Link} href={AppRoute.ROOT}>
          <DailyToolsIcon />
          <p className="font-bold text-inherit">NAME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand className="mr-4" as={Link} href={AppRoute.ROOT}>
          <DailyToolsIcon />
          <p className="hidden sm:block font-bold text-inherit">NAME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          fullWidth
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
    </NextNavBar>
  );
}

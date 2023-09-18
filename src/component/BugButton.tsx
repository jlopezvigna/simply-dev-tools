"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { BugIcon } from "./icons/bug-icon";

export const BugButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      color="primary"
      variant="flat"
      endContent={<BugIcon />}
      as={Link}
      target="_blank"
      href={`${process.env.NEXT_PUBLIC_FEEDBACK_URL}/issues/new?labels=bug`}
      {...props}
    >
      Report a bug
    </Button>
  );
};

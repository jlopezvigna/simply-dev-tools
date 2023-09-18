"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { SettingsIcon } from "./icons/settings-icon";

export const ImprovementButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      color="primary"
      endContent={<SettingsIcon />}
      as={Link}
      target="_blank"
      href={`${process.env.NEXT_PUBLIC_FEEDBACK_URL}/issues/new?labels=enhancement`}
      {...props}
    >
      Suggest an improvement
    </Button>
  );
};

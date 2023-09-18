"use client";

import { Button, ButtonProps, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { BugIcon } from "./icons/bug-icon";

export const BugButton: React.FC<ButtonProps> = (props) => {
  return (
    <Tooltip
      content="Report a bug"
      isDisabled={!props.isIconOnly}
      className="capitalize"
    >
      <Button
        color="primary"
        variant="flat"
        endContent={<BugIcon />}
        as={Link}
        target="_blank"
        href={`${process.env.NEXT_PUBLIC_FEEDBACK_URL}/issues/new?labels=bug`}
        {...props}
      >
        {!props.isIconOnly && "Report a bug"}
      </Button>
    </Tooltip>
  );
};

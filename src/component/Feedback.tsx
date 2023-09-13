import Link from "next/link";
import { Link as UILink } from "@nextui-org/react";
import React from "react";
import { FeedbackIcon } from "./icons/feedback-icon";

export const Feedback = () => {
  return (
    <UILink
      as={Link}
      isBlock
      href={process.env.NEXT_PUBLIC_FEEDBACK_URL as string}
      target="_blank"
      className="flex items-center gap-2 text-xs font-semibold"
    >
      <p> Report Issue or Improvement </p> <FeedbackIcon />
    </UILink>
  );
};

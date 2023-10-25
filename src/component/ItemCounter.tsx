import React from "react";
import { ChevronRightIcon } from "./icons/chevron-right-icon";
import { cn } from "@nextui-org/react";

export const ItemCounter = ({
  number,
  isExpanded,
}: {
  number: number;
  isExpanded: boolean;
}) => (
  <div className="flex items-center gap-1 text-default-500">
    <span className="text-small">{number}</span>
    <ChevronRightIcon
      className={cn("text-xl transition-all", { "rotate-90": isExpanded })}
    />
  </div>
);

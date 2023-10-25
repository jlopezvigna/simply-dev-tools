import { cn } from "@nextui-org/react";
import React from "react";
import { FolderIcon } from "./icons/folder-icon";
import { ItemCounter } from "./ItemCounter";

interface IProps {
  item: any;
  isSubRoute?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isExpanded?: boolean;
}

export const SideBarLink: React.FC<IProps> = ({
  item,
  isSubRoute = false,
  isExpanded = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={cn(
        "flex items-center justify-between py-2 hover:bg-primary/10 cursor-pointer",
        { "border-b-0": isSubRoute }
      )}
    >
      <div className="flex gap-4 items-center">
        {!isSubRoute && (
          <div className="bg-primary/10 text-primary flex items-center rounded-small justify-center w-7 h-7">
            <FolderIcon size={18} />
          </div>
        )}

        <p
          className={cn("text-sm mb-0 truncate font-medium", {
            ["pl-5 font-normal"]: isSubRoute,
          })}
        >
          {item.label}
        </p>
      </div>
      {!isSubRoute && (
        <div>
          <ItemCounter number={item.subRoutes.length} isExpanded={isExpanded} />
        </div>
      )}
    </div>
  );
};

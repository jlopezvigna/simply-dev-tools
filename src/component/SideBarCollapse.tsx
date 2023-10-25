import { SideBarRoutes } from "@/constants";
import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import { SideBarLink } from "./SideBarLink";

interface IProps {
  item: SideBarRoutes;
}

export const SideBarCollapse: React.FC<IProps> = ({ item }) => {
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <SideBarLink
        key={item.label}
        item={item}
        isExpanded={isExpanded}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      />
      <div {...getCollapseProps()}>
        {item.subRoutes.map((subItem) => {
          return <SideBarLink key={subItem.label} item={subItem} isSubRoute />;
        })}
      </div>
    </>
  );
};

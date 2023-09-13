import { SORT } from "@/constants";
import { Select, SelectItem, SelectProps } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface ISortSelect extends Omit<SelectProps, "children"> {
  children?: ReactNode;
}

export const SortSelect: React.FC<ISortSelect> = (props) => {
  return (
    <Select {...props}>
      {SORT.map((item) => (
        <SelectItem key={item.value} value={item.value} aria-label={item.label}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};

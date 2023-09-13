import { LOREM_IPSUM, SORT } from "@/constants";
import { Select, SelectItem, SelectProps } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface ILoremSelect extends Omit<SelectProps, "children"> {
  children?: ReactNode;
}

export const LoremSelect: React.FC<ILoremSelect> = (props) => {
  return (
    <Select {...props}>
      {LOREM_IPSUM.map((item) => (
        <SelectItem key={item.value} value={item.value} aria-label={item.label}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};

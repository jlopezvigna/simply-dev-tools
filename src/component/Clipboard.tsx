import { useCopyToClipboard } from "@/hook/useCopyToClipboard";
import { Button, ButtonProps, Tooltip } from "@nextui-org/react";
import React, { useCallback } from "react";
import { CopyIcon } from "./icons/copy-icon";

interface IClipboard extends ButtonProps {
  toCopy?: string | undefined;
}

export const Clipboard: React.FC<IClipboard> = ({ toCopy = "", ...rest }) => {
  const [, copy] = useCopyToClipboard();

  const handleClick = useCallback(() => {
    copy(toCopy);
  }, [copy, toCopy]);

  return (
    <Tooltip content="Copy to Clipboard">
      <Button
        isIconOnly
        aria-label="copy content"
        variant="flat"
        onClick={handleClick}
        {...rest}
      >
        <CopyIcon />
      </Button>
    </Tooltip>
  );
};

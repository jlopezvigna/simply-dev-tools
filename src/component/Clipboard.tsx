import { useCopyToClipboard } from "@/hook/useCopyToClipboard";
import { Button, ButtonProps, Tooltip } from "@nextui-org/react";
import React, { useCallback } from "react";
import { CopyIcon } from "./icons/copy-icon";

interface IClipboard extends ButtonProps {
  toCopie?: string | undefined;
}

export const Clipboard: React.FC<IClipboard> = ({ toCopie = "", ...rest }) => {
  const [, copy] = useCopyToClipboard();

  const handleClick = useCallback(() => {
    copy(toCopie);
  }, [copy, toCopie]);

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

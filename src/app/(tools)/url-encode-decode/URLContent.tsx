"use client";

import { Clipboard } from "@/component/Clipboard";
import { ArrowSwitchIcon } from "@/component/icons/arrow-switch-icon";
import { useToggle } from "@/hook/useToggle";
import { Textarea } from "@nextui-org/input";
import { Button, Tooltip } from "@nextui-org/react";
import { useCallback, useState } from "react";

const _decode = (str: string): string => {
  return decodeURIComponent(str);
};

const _encode = (str: string): string => {
  return encodeURIComponent(str);
};

export default function URLContent() {
  const [showResult, _, setToggle] = useToggle();
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const encode = useCallback(() => {
    setOutput(_encode(input));
    setToggle(true);
  }, [input, setToggle]);

  const decode = useCallback(() => {
    setOutput(_decode(input));
    setToggle(true);
  }, [input, setToggle]);

  const switchInputs = useCallback(() => {
    setInput(output);
    setToggle(false);
  }, [output, setInput, setToggle]);

  return (
    <>
      <div className="container mb-3">
        <div className="columns-1">
          <div className="w-full mb-5 md:m-0">
            <Textarea
              fullWidth
              minRows={300}
              size="lg"
              placeholder="Paste your text here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button className="m" color="primary" onClick={encode}>
          Encode
        </Button>
        <Button
          className="mb-4"
          color="primary"
          variant="flat"
          onClick={decode}
        >
          Decode
        </Button>
        <Tooltip content="Switch content">
          <Button
            className="mb-4"
            color="primary"
            variant="light"
            onClick={switchInputs}
            isIconOnly
            isDisabled={!output}
          >
            <ArrowSwitchIcon />
          </Button>
        </Tooltip>
      </div>

      {showResult && (
        <div className="flex gap-3">
          <Textarea fullWidth color="primary" readOnly value={output} />
          <Clipboard
            className="mt-1.5"
            toCopy={output}
            color="primary"
            size="lg"
          />
        </div>
      )}
    </>
  );
}

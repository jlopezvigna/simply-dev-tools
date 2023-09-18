"use client";

import { Clipboard } from "@/component/Clipboard";
import { useToggle } from "@/hook/useToggle";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useCallback, useState } from "react";

const _decode = (str: string): string => {
  return Buffer.from(str, "base64").toString("utf8");
};

const _encode = (str: string): string => {
  return Buffer.from(str, "utf8").toString("base64");
};

export default function Base64Content() {
  const [showResult, _, setToogle] = useToggle();
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const encode = useCallback(() => {
    setOutput(_encode(input));
    setToogle(true);
  }, [input, setToogle]);

  const decode = useCallback(() => {
    setOutput(_decode(input));
    setToogle(true);
  }, [input, setToogle]);

  return (
    <>
      <div className="container mb-3">
        <div className="columns-1">
          <div className="w-full mb-5 md:m-0">
            <Textarea
              fullWidth
              minRows={300}
              size="lg"
              placeholder="Paste you text here"
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
      </div>

      {showResult && (
        <div className="flex gap-3">
          <Textarea fullWidth color="primary" readOnly value={output} />
          <Clipboard
            className="mt-1.5"
            toCopie={output}
            color="primary"
            size="lg"
          />
        </div>
      )}
    </>
  );
}

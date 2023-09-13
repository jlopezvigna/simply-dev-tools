"use client";

import { ChangeEventHandler, useCallback, useState } from "react";
import { Textarea } from "@nextui-org/input";
import { Button, Checkbox, Snippet } from "@nextui-org/react";
import { useToggle } from "@/hook/useToggle";
import { SortSelect } from "@/component/SortSelect";
import { SortValue } from "@/constants/enums";
import { encode } from "punycode";
import { Clipboard } from "@/component/Clipboard";

const _decode = (str: string): string => {
  return Buffer.from(str, "base64").toString("utf8");
};

const _encode = (str: string): string => {
  return Buffer.from(str, "utf8").toString("base64");
};

export default function Base64() {
  const [showResult, toggle, setToogle] = useToggle();
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
    <main className="px-8 py-6 md:px-24 py-20">
      <h2 className={`text-2xl font-semibold`}>Base 64 Encode / Decode</h2>
      <p className={`mb-8 text-sm opacity-50`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="container mb-3">
        <div className="columns-1">
          <div className="w-full mb-5 md:m-0">
            <Textarea
              fullWidth
              minRows={300}
              size="lg"
              // label="Original Text (A)"
              placeholder="Paste you text here"
              // labelPlacement="outside"
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
        <Button className="mb-4" onClick={decode}>
          Decode
        </Button>
      </div>

      {showResult && (
        <div className="flex gap-3">
          <Textarea fullWidth color="success" readOnly value={output} />
          <Clipboard
            className="mt-1.5"
            toCopie={output}
            color="success"
            size="sm"
          />
        </div>
      )}
    </main>
  );
}

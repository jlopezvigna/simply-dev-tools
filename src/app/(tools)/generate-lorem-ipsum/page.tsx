"use client";

import { Clipboard } from "@/component/Clipboard";
import { LoremSelect } from "@/component/LoremSelect";
import { HeaderTool } from "@/component/seccion/HeaderTool";
import { LoremIpsumValues } from "@/constants/enums";
import { useIsMounted } from "@/hook/useToggle copy";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/react";
import { loremIpsum } from "lorem-ipsum";
import { useCallback, useEffect, useMemo, useState } from "react";

const LOREM_IPSUM_NUMBER = "5";

function removeTags(str: string) {
  if (str === null || str === "") return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, "");
}

export default function GenerateLoremIpsum() {
  const isMounted = useIsMounted();
  const [count, setCount] = useState<string>(LOREM_IPSUM_NUMBER);
  const [type, setType] = useState<Set<LoremIpsumValues>>(
    new Set([LoremIpsumValues.PARAGRAPHS])
  );

  const handleCount = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(e.target.value);
    },
    [setCount]
  );

  const handleType = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value as LoremIpsumValues;
      setType(new Set([newValue]));
    },
    [setType]
  );

  const output = useMemo(() => {
    return loremIpsum({
      count: Number(count),
      units: type.values().next().value,
      format: "html",
    });
  }, [count, type]);

  return (
    <>
      <HeaderTool
        pageTitle="Generate Lorem Ipsum"
        pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur"
      />

      <div className="flex gap-3 items-center">
        <Input
          type="number"
          label="Number of"
          value={count}
          onChange={handleCount}
        />
        <LoremSelect
          label="Select type"
          selectedKeys={type}
          onChange={handleType}
        />
        <Clipboard toCopie={removeTags(output) as string} size="lg" />
      </div>
      <Divider className="my-6" />

      {output && isMounted && (
        <div
          className="text-sm [&_*]:mb-2"
          dangerouslySetInnerHTML={{
            __html: output,
          }}
        ></div>
      )}
    </>
  );
}

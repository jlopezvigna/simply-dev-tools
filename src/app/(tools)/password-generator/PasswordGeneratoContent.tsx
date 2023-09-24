"use client";

import { Clipboard } from "@/component/Clipboard";
import { RefreshIcon } from "@/component/icons/refresh-icon";
import { useToggle } from "@/hook/useToggle";
import { Checkbox, Input } from "@nextui-org/react";
import { generate } from "generate-password";
import { useMemo, useState } from "react";

export default function PasswordGeneratoContent() {
  const [x, toggle] = useToggle();
  const [options, setOptions] = useState<{
    length: number;
    numbers: boolean;
    symbols: boolean;
    uppercase: boolean;
    lowercase: boolean;
  }>({
    length: 10,
    numbers: true,
    symbols: false,
    uppercase: true,
    lowercase: true,
  });

  const password = useMemo(() => {
    return generate(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, x]);

  return (
    <>
      <div className="flex gap-3 items-center mb-4">
        <Input
          label="Password"
          value={password}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggle}
            >
              <RefreshIcon
                size={20}
                className="text-default-400 pointer-events-none"
              />
            </button>
          }
          type="text"
          className="max-w-xs"
        />
        <Clipboard toCopy={password} size="lg" />
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <Input
          label="Length"
          type="number"
          value={options.length.toString()}
          onChange={(e) =>
            setOptions((prev) => ({ ...prev, length: Number(e.target.value) }))
          }
          size="sm"
          className="w-full md:w-20"
        />
        <Checkbox
          aria-label="uppercase"
          isSelected={options.uppercase}
          isDisabled={
            options.uppercase &&
            !options.lowercase &&
            !options.numbers &&
            !options.symbols
          }
          onValueChange={(value) =>
            setOptions((prev) => ({ ...prev, uppercase: value }))
          }
        >
          ABC
        </Checkbox>
        <Checkbox
          aria-label="lowercase"
          isSelected={options.lowercase}
          isDisabled={
            !options.uppercase &&
            options.lowercase &&
            !options.numbers &&
            !options.symbols
          }
          onValueChange={(value) =>
            setOptions((prev) => ({ ...prev, lowercase: value }))
          }
        >
          abc
        </Checkbox>
        <Checkbox
          aria-label="numbers"
          isSelected={options.numbers}
          isDisabled={
            !options.uppercase &&
            !options.lowercase &&
            options.numbers &&
            !options.symbols
          }
          onValueChange={(value) =>
            setOptions((prev) => ({ ...prev, numbers: value }))
          }
        >
          123
        </Checkbox>
        <Checkbox
          aria-label="lowercase"
          isSelected={options.symbols}
          isDisabled={
            !options.uppercase &&
            !options.lowercase &&
            !options.numbers &&
            options.symbols
          }
          onValueChange={(value) =>
            setOptions((prev) => ({ ...prev, symbols: value }))
          }
        >
          #$%
        </Checkbox>
      </div>
    </>
  );
}

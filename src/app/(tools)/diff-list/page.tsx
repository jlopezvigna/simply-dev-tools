"use client";

import { ChangeEventHandler, useCallback, useState } from "react";
import { Textarea } from "@nextui-org/input";
import { Button, Checkbox } from "@nextui-org/react";
import { useToggle } from "@/hook/useToggle";
import { SortSelect } from "@/component/SortSelect";
import { SortValue } from "@/constants/enums";
import { HeaderTool } from "@/component/seccion/HeaderTool";

function compareStrings(
  _inputA: string,
  _inputB: string,
  _caseInsensitive: boolean = false,
  _ignoreDuplicates: boolean = false,
  _removeSpaces: boolean = false,
  _sortOrder: SortValue
): {
  onlyInA: string;
  inBoth: string;
  onlyInB: string;
} {
  const listA = _inputA
    .split("\n")
    .filter((item) => item.trim() !== "") // Remove empty rows
    .map((item) => (_caseInsensitive ? item.toLowerCase() : item))
    .map((item) => (_removeSpaces ? item.trim() : item)) // Remove Begin End Spaces
    .filter(
      (value, index, array) =>
        _ignoreDuplicates ? array.indexOf(value) === index : true // Ignore Duplicates
    )
    .sort((a, b) => {
      if (_sortOrder === "asc") {
        return a.localeCompare(b);
      } else if (_sortOrder === "desc") {
        return b.localeCompare(a);
      } else {
        return 0;
      }
    });

  const listB = _inputB
    .split("\n")
    .filter((item) => item.trim() !== "") // Remove empty rows
    .map((item) => (_caseInsensitive ? item.toLowerCase() : item))
    .map((item) => (_removeSpaces ? item.trim() : item)) // Remove Begin End Spaces
    .filter(
      (value, index, array) =>
        _ignoreDuplicates ? array.indexOf(value) === index : true // Ignore Duplicates
    )
    .sort((a, b) => {
      if (_sortOrder === "asc") {
        return a.localeCompare(b);
      } else if (_sortOrder === "desc") {
        return b.localeCompare(a);
      } else {
        return 0;
      }
    });

  const onlyInA = listA.filter((item) => !listB.includes(item)).join("\n");
  const inBoth = listA.filter((item) => listB.includes(item)).join("\n");
  const onlyInB = listB.filter((item) => !listA.includes(item)).join("\n");

  return {
    onlyInA,
    inBoth,
    onlyInB,
  };
}

export default function DiffList() {
  const [showResult, toggle, setToogle] = useToggle();
  const [caseInsensitive, toggleCaseInsensitive] = useToggle(true);
  const [ignoreDuplicates, toggleIgnoreDuplicates] = useToggle(true);
  const [removeSpaces, toggleRemoveSpaces] = useToggle(true);

  const [inputA, setInputA] = useState<string>("");
  const [inputB, setInputB] = useState<string>("");
  const [onlyInA, setOnlyInA] = useState<string>("");
  const [onlyInB, setOnlyInB] = useState<string>("");
  const [inBoth, setInBoth] = useState<string>("");

  const [sortOrder, setSort] = useState<Set<SortValue>>(
    new Set([SortValue.Az])
  );

  const diffCheck = useCallback(() => {
    const res = compareStrings(
      inputA,
      inputB,
      caseInsensitive,
      ignoreDuplicates,
      removeSpaces,
      sortOrder.values().next().value
    );
    setOnlyInA(res.onlyInA);
    setOnlyInB(res.onlyInB);
    setInBoth(res.inBoth);
    setToogle(true);
  }, [
    inputA,
    inputB,
    caseInsensitive,
    ignoreDuplicates,
    removeSpaces,
    sortOrder,
    setToogle,
    setInBoth,
    setOnlyInA,
    setOnlyInB,
  ]);

  const reset = useCallback(() => {
    setInputA("");
    setInputB("");
    toggle();
  }, [setInputA, setInputB, toggle]);

  const handleSortSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value as SortValue;
      setSort(new Set([newValue]));
    },
    [setSort]
  );

  return (
    <>
      <HeaderTool
        pageTitle="Diff List"
        pageDescription="The tool is by default case-insensitive, meaning it treats all items as
        if they are in lowercase. Before performing any operations, duplicate
        entries are removed from each list, leading and trailing spaces are
        removed, and all lists are sorted alphabetically."
      />

      <div className="container">
        <div className="columns-1 md:columns-2">
          <div className="w-full mb-5 md:m-0">
            <Textarea
              fullWidth
              minRows={300}
              size="lg"
              label="Original Text (A)"
              labelPlacement="outside"
              value={inputA}
              onChange={(e) => setInputA(e.target.value)}
            />
          </div>
          <div className="w-full mb-5 md:m-0">
            <Textarea
              fullWidth
              minRows={300}
              size="lg"
              label="Changed Text (B)"
              labelPlacement="outside"
              value={inputB}
              onChange={(e) => setInputB(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap mt-3 mb-4 gap-3">
        <div className="w-full md:w-1/4">
          <SortSelect
            aria-label="sort filter"
            labelPlacement="outside"
            selectedKeys={sortOrder}
            onChange={handleSortSelect}
          />
        </div>
        <Checkbox
          aria-label="case insensitive filter"
          isSelected={caseInsensitive}
          onValueChange={toggleCaseInsensitive}
        >
          Case Insensitive
        </Checkbox>
        <Checkbox
          aria-label="ignore duplicates filter"
          isSelected={ignoreDuplicates}
          onValueChange={toggleIgnoreDuplicates}
        >
          Ignore Duplicates
        </Checkbox>
        <Checkbox
          aria-label="ignore begin end spaces filter"
          isSelected={removeSpaces}
          onValueChange={toggleRemoveSpaces}
        >
          Ignore Begin End Spaces
        </Checkbox>
      </div>

      <Button className="mb-4" color="primary" onClick={diffCheck}>
        Find Differences
      </Button>

      {showResult && (
        <>
          <h2 className={`text-lg font-semibold`}>Results:</h2>
          <div className="container">
            <div className="columns-1 md:columns-3">
              <div className="w-full mb-5 md:m-0">
                <Textarea
                  fullWidth
                  minRows={300}
                  size="lg"
                  label="Only in A"
                  labelPlacement="outside"
                  value={onlyInA}
                />
              </div>
              <div className="w-full mb-5 md:m-0">
                <Textarea
                  fullWidth
                  minRows={300}
                  size="lg"
                  label="In A and B"
                  labelPlacement="outside"
                  value={inBoth}
                />
              </div>
              <div className="w-full">
                <Textarea
                  fullWidth
                  minRows={300}
                  size="lg"
                  label="Only in B"
                  labelPlacement="outside"
                  value={onlyInB}
                />
              </div>
            </div>
            <Button className="mt-4" onClick={reset}>
              Reset
            </Button>
          </div>
        </>
      )}
    </>
  );
}

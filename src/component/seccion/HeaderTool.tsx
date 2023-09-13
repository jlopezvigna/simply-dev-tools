import React from "react";

interface IHeaderTool {
  pageTitle: string;
  pageDescription: string;
}

export const HeaderTool: React.FC<IHeaderTool> = ({
  pageTitle,
  pageDescription,
}) => {
  return (
    <>
      <h2 className={`text-2xl font-semibold`}>{pageTitle}</h2>
      <p className={`mb-8 text-sm opacity-50`}>{pageDescription}</p>
    </>
  );
};

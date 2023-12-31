import React from "react";
import Link from "next/link";

export interface IBoxTool {
  label: string;
  description: string;
  href: string;
}

export const Card: React.FC<IBoxTool> = ({ label, description, href }) => {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-primary/[.2] hover:bg-primary/[.2] hover:text-primary"
      aria-label={label}
      aria-description={description}
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {`${label} `}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-auto max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </Link>
  );
};

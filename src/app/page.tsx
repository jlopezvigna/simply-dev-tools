import { BugButton } from "@/component/BugButton";
import { Card } from "@/component/Card";
import { ImprovementButton } from "@/component/ImprovementButton";
import { tools } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-8 py-10 md:px-24 md:pt-20">
      <h1
        aria-label="Simply Dev Tools"
        className="flex flex-col items-center gap-2 justify-center mb-10 md:flex-row logo-container"
      >
        <Image
          src="/simply-light.png"
          alt="simply logo"
          width={300}
          height={300}
        />
        <span className="simply-logo home-page-logo">dev tools</span>
      </h1>

      <h2 className="text-base text-neutral-500 max-w-4xl text-center m-auto md:text-xl lg:text-2xl">
        Explore a collection of daily developer tools. Simplify your development
        tasks with our free online tools.
      </h2>
      <div className="flex flex-col gap-4 justify-center my-10 md:flex-row">
        <ImprovementButton />
        <BugButton />
      </div>
      <main className="flex flex-col items-center justify-between">
        <div className="mb-32 grid text-center md:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {tools.map((tool) => (
            <Card
              key={tool.label}
              label={tool.label}
              description={tool.description}
              href={tool.href}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

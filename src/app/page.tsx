import { BugButton } from "@/component/BugButton";
import { Card } from "@/component/Card";
import { ImprovementButton } from "@/component/ImprovementButton";
import { tools } from "@/constants";

export default function Home() {
  return (
    <div className="px-8 py-10 md:px-24 md:pt-20">
      <h1
        aria-label="Simply Dev Tools"
        className="text-6xl flex flex-col items-center font-extrabold gap-2 justify-center mb-10 text-neutral-900 md:flex-row text-7xl"
      >
        <span className="simply-logo">Simply</span>
        <span>Dev</span>
        <span>Tools</span>
      </h1>
      <h2 className="text-base text-neutral-500 max-w-4xl text-center m-auto md:text-xl lg:text-2xl">
        Vercels frontend cloud gives developers the frameworks, workflows, and
        infrastructure to build a faster, more personalized Web.
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

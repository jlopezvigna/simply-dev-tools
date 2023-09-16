import { Box } from "@/component/Box";
import { tools } from "@/constants";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {tools.map((tool) => (
          <Box
            key={tool.label}
            label={tool.label}
            description={tool.description}
            href={tool.href}
          />
        ))}
      </div>
    </main>
  );
}

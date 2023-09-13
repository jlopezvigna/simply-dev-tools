import { AppRoute } from "@/AppRoute";
import { BoxTool, IBoxTool } from "@/component/BoxTool";

const TOOLS: IBoxTool[] = [
  {
    label: "Diff List",
    description: "Check differences between two list.",
    href: AppRoute.DIFFLIST,
  },
  {
    label: "Base64 Convert",
    description:
      "Base64 is an encoding that converts binary data to text and vice versa.",
    href: AppRoute.BASE64,
  },
  {
    label: "Lorem Ipsum Generator",
    description:
      "Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs",
    href: AppRoute.LOREM_IPSUM,
  },
  {
    label: "Credit Card Generator",
    description: "Credit Card Mocks in JSON, XML.",
    href: AppRoute.CREDIT_CARD_GENERATOR,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {TOOLS.map((tool) => (
          <BoxTool
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

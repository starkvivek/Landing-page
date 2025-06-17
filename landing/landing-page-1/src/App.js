import { useEffect } from "react";
import { gsap } from "gsap";
import * as Accordion from "@radix-ui/react-accordion";

export default function App() {
  useEffect(() => {
    gsap.from(".reveal", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });
    gsap.from(".first-paragraph span", {
      opacity: 0,
      stagger: 0.05,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  const firstParagraph = "This is the paragraph that comes to life as you scroll.";

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <header className="text-center py-12 reveal">
        <h1 className="text-4xl font-bold">Welcome to Our Landing Page</h1>
      </header>

      <section className="px-4 md:px-16 lg:px-32 text-lg first-paragraph">
        {firstParagraph.split(" ").map((word, i) => (
          <span key={i} className="inline-block mr-1">
            {word}
          </span>
        ))}
      </section>

      <section className="mt-12 px-4 md:px-16 lg:px-32">
        <h2 className="text-2xl font-semibold mb-4">Best Selling Products</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {["Product A", "Product B", "Product C"].map((product, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl text-center transform transition duration-300 hover:scale-105 hover:bg-gray-200 cursor-pointer"
            >
              {product}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 px-4 md:px-16 lg:px-32">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <Accordion.Root type="single" collapsible className="space-y-2">
          {["What is this?", "How does it work?", "Where can I find more info?"].map((q, i) => (
            <Accordion.Item value={`item-${i}`} key={i} className="border p-4 rounded-lg">
              <Accordion.Trigger className="text-left w-full font-medium">
                {q}
              </Accordion.Trigger>
              <Accordion.Content className="mt-2 text-gray-700 transition-all duration-300 ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </section>
    </div>
  );
}
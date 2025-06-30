import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/get-started/typography')({
  component: TypographyDemo
});

function TypographyDemo() {
  return (
    <>
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-4">Typography</h1>
          <p className="max-w-[75ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius id fuga aperiam quod aliquid
            inventore laboriosam ipsum deleniti itaque eveniet vitae, ipsam consequuntur dolorum? Possimus perferendis
            quaerat esse consequatur.
          </p>
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl mb-2">Headings</h2>
            <p className="max-w-[75ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius id fuga aperiam quod aliquid
              inventore laboriosam ipsum deleniti itaque eveniet vitae, ipsam consequuntur dolorum? Possimus perferendis
              quaerat esse consequatur.
            </p>
          </div>
          <h1 className="text-4xl">Heading One - 39.81px</h1>
          <h1 className="text-3xl">Heading Two - 33.18px</h1>
          <h1 className="text-2xl">Heading Three - 27.65px</h1>
          <h1 className="text-xl">Heading Four - 23.04px</h1>
          <h1 className="text-lg">Heading Five - 19.20px</h1>
          <h1 className="text-md">Heading Six - 16px</h1>
        </div>
      </section>
    </>
  );
}

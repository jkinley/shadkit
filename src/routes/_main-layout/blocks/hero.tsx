import Hero from '@/registry/blocks/hero/hero';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/blocks/hero')({
  component: HeroDemo
});

function HeroDemo() {
  return (
    <div>
      <Hero />
      <section className="py-8">
        <div className="max-w-4xl mx-auto p-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Installation</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur. Est consectetur vitae.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm">
            <pre>
              <code>pnpm shadcn add https://manage.rackspace.com/shadkit/hero.json</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

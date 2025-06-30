import { AutoGrid } from '@/registry/ui/autogrid';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/components/autogrid')({
  component: AutoGridDemo
});

function AutoGridDemo() {
  return (
    <div>
      <section className="py-8">
        <div className="max-w-4xl mx-auto p-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">AutoGrid</h2>
            <p>
              AutoGrid uses CSS Grid to create a responsive layout that adapts to available space—no media queries
              required. It dynamically adjusts the number of columns based on the container width, making it ideal for
              flexible, content-driven layouts. The algorithm ensures items maintain a minimum width while filling the
              space efficiently.
            </p>
          </div>
          <div className="relative resize-x border p-8 overflow-auto after:text-xs after:leading-1 after:content-['Resize_Me!'] after:absolute after:right-4 after:bottom-4 max-w-5xl">
            <AutoGrid colWidth="200px" gap="1rem">
              <div className="bg-red-500 h-36 grid place-content-center text-3xl font-bold">Item 1</div>
              <div className="bg-blue-500 h-36 grid place-content-center text-3xl font-bold">Item 2</div>
              <div className="bg-fuchsia-500 h-36 grid place-content-center text-3xl font-bold">Item 3</div>
              <div className="bg-amber-500 h-36 grid place-content-center text-3xl font-bold">Item 4</div>
            </AutoGrid>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto p-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Installation</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur? Est consectetur vitae
              tenetur accusantium repudiandae similique aperiam iste libero recusandae, maiores adipisci reprehenderit
              quidem magni, dolor accusamus deleniti? Expedita?
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm">
            <pre>
              <code>pnpm shadcn add https://manage.rackspace.com/shadkit/autogrid.json</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

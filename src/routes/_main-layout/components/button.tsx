import { Button } from '@/registry/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { ChevronRightIcon, Loader2Icon, LucideHome } from 'lucide-react';

export const Route = createFileRoute('/_main-layout/components/button')({
  component: Demo
});

function Demo() {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Button</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui error, natus consectetur possimus beatae
            quae. Eaque, vel magni. Dolorum unde fuga error iusto natus quam adipisci quae sapiente eveniet.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="default" size="icon">
            <ChevronRightIcon />
          </Button>
          <Button variant="outline" size="sm">
            <LucideHome /> New Branch
          </Button>
          <Button size="sm" disabled>
            <Loader2Icon className="animate-spin" />
            Please wait
          </Button>
        </div>
      </div>
    </section>
  );
}

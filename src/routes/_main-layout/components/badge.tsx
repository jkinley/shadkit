import { Badge } from '@/registry/ui/badge';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/components/badge')({
  component: BadgeDemo
});

function BadgeDemo() {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Badge</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui error, natus consectetur possimus beatae
            quae. Eaque, vel magni. Dolorum unde fuga error iusto natus quam adipisci quae sapiente eveniet.
          </p>
        </div>
        <div className="flex gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </section>
  );
}

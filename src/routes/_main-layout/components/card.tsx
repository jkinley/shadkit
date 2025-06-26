import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/registry/ui/card';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/components/card')({
  component: CardDemo
});

function CardDemo() {
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto p-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Card</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui error, natus consectetur possimus beatae
            quae. Eaque, vel magni. Dolorum unde fuga error iusto natus quam adipisci quae sapiente eveniet.
          </p>
        </div>
        <Card className="max-w-xs">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia vel, ipsa perferendis aut excepturi
              sunt dolorum quibusdam tenetur. Fugiat tempore voluptates reprehenderit repellat dolore adipisci velit
              minus ullam deserunt expedita.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

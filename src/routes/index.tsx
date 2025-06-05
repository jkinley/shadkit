import { createFileRoute } from '@tanstack/react-router';
import { AutoGrid } from 'registry/ui/autogrid';
import { Alert, AlertDescription, AlertTitle } from 'registry/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'registry/ui/card';

export const Route = createFileRoute('/')({
  component: App
});

function App() {
  return (
    <div className="p-4">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-4xl font-bold">Shadkit</h1>
        <p>A custom registry for shadcn.</p>
      </div>

      <section className="py-8">
        <div className="max-w-5xl mx-auto p-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Alert</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui error, natus consectetur possimus
              beatae quae. Eaque, vel magni. Dolorum unde fuga error iusto natus quam adipisci quae sapiente eveniet.
            </p>
          </div>
          <div className="grid gap-4">
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam adipisci modi pariatur necessitatibus
                dolorum sed earum aperiam sint, voluptates vel, facilis mollitia ea sit saepe minima voluptatibus?
                Officia, omnis facere.
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam adipisci modi pariatur necessitatibus
                dolorum sed earum aperiam sint, voluptates vel, facilis mollitia ea sit saepe minima voluptatibus?
                Officia, omnis facere.
              </AlertDescription>
            </Alert>
            <Alert variant="info">
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam adipisci modi pariatur necessitatibus
                dolorum sed earum aperiam sint, voluptates vel, facilis mollitia ea sit saepe minima voluptatibus?
                Officia, omnis facere.
              </AlertDescription>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam adipisci modi pariatur necessitatibus
                dolorum sed earum aperiam sint, voluptates vel, facilis mollitia ea sit saepe minima voluptatibus?
                Officia, omnis facere.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto p-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">AutoGrid</h2>
            <p>
              AutoGrid uses CSS Grid to create a responsive layout that adapts to available space—no media queries
              required. It dynamically adjusts the number of columns based on the container width, making it ideal for
              flexible, content-driven layouts. The algorithm ensures items maintain a minimum width while filling the
              space efficiently.
            </p>
          </div>

          <AutoGrid colWidth="200px" gap="1rem">
            <div className="bg-red-500 h-36 grid place-content-center text-3xl font-bold">1</div>
            <div className="bg-blue-500 h-36 grid place-content-center text-3xl font-bold">2</div>
            <div className="bg-fuchsia-500 h-36 grid place-content-center text-3xl font-bold">3</div>
            <div className="bg-amber-500 h-36 grid place-content-center text-3xl font-bold">4</div>
            <div className="bg-teal-500 h-36 grid place-content-center text-3xl font-bold">5</div>
          </AutoGrid>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto p-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Card</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui error, natus consectetur possimus
              beatae quae. Eaque, vel magni. Dolorum unde fuga error iusto natus quam adipisci quae sapiente eveniet.
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

      <section className="py-8">
        <div className="max-w-5xl mx-auto p-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Card</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui error, natus consectetur possimus
              beatae quae. Eaque, vel magni. Dolorum unde fuga error iusto natus quam adipisci quae sapiente eveniet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

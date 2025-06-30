import { createFileRoute } from '@tanstack/react-router';

import { Alert, AlertDescription, AlertTitle } from '@/registry/ui/alert';
export const Route = createFileRoute('/_main-layout/components/alert')({
  component: AlertDemo
});

function AlertDemo() {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Alert</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui error, natus consectetur possimus beatae
            quae. Eaque, vel magni Dolorum unde fuga error iusto natus quam adipisci quae sapiente eveniet.
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
  );
}

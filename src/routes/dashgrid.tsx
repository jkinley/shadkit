import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardTitle } from 'registry/ui/card';

export const Route = createFileRoute('/dashgrid')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div>
        <h1 className="text-4xl font-bold">Welcome to Dashgrid</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem accusantium quam.</p>
      </div>

      <div>
        <Card>
          <CardContent>
            <CardTitle className="mb-4">Card 1</CardTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia quisquam eum amet possimus
            nobis nostrum quas necessitatibus cum atque sapiente ducimus rerum velit facere architecto modi, maiores
            animi soluta.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

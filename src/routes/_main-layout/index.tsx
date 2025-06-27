import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/')({
  component: App
});

function App() {
  return (
    <div className="p-4">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-4xl font-bold">Shadkit</h1>
        <p>A custom registry for shadcn.</p>
      </div>
    </div>
  );
}

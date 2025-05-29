import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashgrid')({
  component: Dashgrid
});

function Dashgrid() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>Welcome to Dashgrid</h1>
    </div>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/ui/card';

import { useUsers } from './-hooks/use-users';

export const Route = createFileRoute('/dashgrid/')({
  component: DashGrid
});

function DashGrid() {
  const { data: users, isLoading } = useUsers();

  if (isLoading)
    return (
      <div>
        <div className="h-screen grid place-content-center">
          <p>Loading...</p>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users?.map((user: any) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{user.email}</p>
              <p>{user.company.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

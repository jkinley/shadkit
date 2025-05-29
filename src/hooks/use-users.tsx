// registry/blocks/dashboard/hooks/use-users.ts
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/lib/users';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  });
}

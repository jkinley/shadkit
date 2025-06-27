import { createFileRoute } from '@tanstack/react-router';
import DashGrid from '@/registry/blocks/dashgrid';

export const Route = createFileRoute('/_main-layout/dashgrid')({
  component: DashGrid
});

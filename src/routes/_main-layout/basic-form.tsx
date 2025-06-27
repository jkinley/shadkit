import { createFileRoute } from '@tanstack/react-router';
import BasicForm from '@/registry/blocks/basic-form';

export const Route = createFileRoute('/_main-layout/basic-form')({
  component: BasicForm
});

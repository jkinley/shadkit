import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main-layout/components/external-link')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main-layout/components/external-link"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main-layout/dashgrid')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main-layout/dashgrid"!</div>
}

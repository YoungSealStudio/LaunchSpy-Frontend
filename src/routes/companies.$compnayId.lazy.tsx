import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/companies/$compnayId')({
  component: Company,
})

function Company() {
  const { compnayId } = Route.useParams()

  return (
    <div className="p-2">
      Hello from comany detail!
      <div>id: {compnayId}</div>
    </div>
  )
}

import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/companies/$compnayId/restaurants')({
  component: CompanyRestaurants,
})

function CompanyRestaurants() {
  const { compnayId } = Route.useParams()

  return (
    <div className="p-2">
      Hello from comany's restauratns page
      <div>id: {compnayId}</div>
    </div>
  )
}

import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/companies/$compnayId/add-restaurant'
)({
  component: CompanyRestaurants,
})

function CompanyRestaurants() {
  const { compnayId } = Route.useParams()

  return (
    <div className="p-2">
      음식점 추가하기
      <div>id: {compnayId}</div>
    </div>
  )
}

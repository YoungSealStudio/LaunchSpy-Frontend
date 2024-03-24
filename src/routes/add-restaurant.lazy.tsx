import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/add-restaurant')({
  component: AddRestaurant,
})

function AddRestaurant() {
  return <div className="p-2">Hello from About!</div>
}

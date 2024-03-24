import { createLazyFileRoute } from '@tanstack/react-router'

import ComponentsShowcase from '@/ComponentsShowcase'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <ComponentsShowcase />
    </div>
  )
}

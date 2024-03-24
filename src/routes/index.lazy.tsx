import { createLazyFileRoute } from '@tanstack/react-router'

import Home from '@/pages/home/Home'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Home />
    </div>
  )
}

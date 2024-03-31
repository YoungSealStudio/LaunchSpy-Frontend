import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/join')({
  component: Join,
})

function Join() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center">
        회원가입 페이지
      </div>
    </div>
  )
}

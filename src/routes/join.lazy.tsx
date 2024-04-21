import { createLazyFileRoute, useSearch } from '@tanstack/react-router'

import UserJoinForm from '@/app/components/user-join-form'

export const Route = createLazyFileRoute('/join')({
  component: Join,
})

function Join() {
  const search: { email: string } = useSearch({
    strict: false,
  })

  console.log('###', search)

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl	mb-5">추천 받으려면 정보를 입력해주세요!</h2>
        <UserJoinForm email={search.email} />
      </div>
    </div>
  )
}

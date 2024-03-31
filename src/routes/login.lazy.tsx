import { createLazyFileRoute } from '@tanstack/react-router'

import UserAuthForm from '@/app/components/user-auth-form'
import { Card } from '@/components/ui/card'
import useUserAuthForm from '@/hooks/use-user-auth-form'
import { makeGsiClientResource } from '@/resources/gsiClientResource'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

const gsiClientResource = makeGsiClientResource()

function Login() {
  const gsiClient = gsiClientResource.read()

  const { isEmailSignIn, ...userAuthFormProps } = useUserAuthForm({
    gsiClient,
  })

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-3xl	mb-5">다른 회사의 맛집을 추천받아 볼까요?</h2>
        <p className="text-slate-500	">
          {isEmailSignIn
            ? '비밀번호를 입력해주세요'
            : '먼저 이메일 입력이 필요해요'}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Card className="p-2 w-[400px]">
          <UserAuthForm
            {...userAuthFormProps}
            className="w-full"
            emailPlaceholder="여기에 이메일 입력"
            isEmailSignIn={isEmailSignIn}
          />
        </Card>
      </div>
    </div>
  )
}

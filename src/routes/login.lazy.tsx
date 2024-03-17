import { createLazyFileRoute } from '@tanstack/react-router'

import UserAuthForm from '@/app/components/user-auth-form'
import { Card } from '@/components/ui/card'
import useUserAuthForm from '@/hooks/use-user-auth-form'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  const userAuthFormProps = useUserAuthForm()

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Card className="p-2 w-[400px]">
        <UserAuthForm {...userAuthFormProps} className="w-full" />
      </Card>
    </div>
  )
}

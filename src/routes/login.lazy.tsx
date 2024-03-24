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

  const userAuthFormProps = useUserAuthForm({
    gsiClient,
  })

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Card className="p-2 w-[400px]">
        <UserAuthForm {...userAuthFormProps} className="w-full" />
      </Card>
    </div>
  )
}

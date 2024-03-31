import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import UserAuthForm from '@/app/components/user-auth-form'
import { Button } from '@/components/ui/button'
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

  const handleJoinClick = () => {}

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center">
        <Card className="p-2 w-[400px]">
          <UserAuthForm {...userAuthFormProps} className="w-full" />
        </Card>

        <Button
          className="mt-10 p-0 box-border w-[calc(100%_-_60px)] bg-gray-400 h-fit"
          onClick={handleJoinClick}
        >
          <Link className="w-full h-full p-3" to="/join">
            회원가입
          </Link>
        </Button>
      </div>
    </div>
  )
}

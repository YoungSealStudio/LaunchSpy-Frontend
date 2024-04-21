import { useNavigate } from '@tanstack/react-router'
import { FormEvent, useEffect, useRef, useState } from 'react'

import { LAUNCH_SPY_SEVER_URL } from '@/constants'

type useUserAuthFormProps = {
  emailCheck?: boolean
  gsiClient?: typeof google
  onEmailSignCheck?: () => void
}

const useUserAuthForm = (props?: useUserAuthFormProps) => {
  const [isEmailSignIn, setIsEmailSignIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate({ from: '/login' })

  useEffect(() => {
    if (isEmailSignIn) {
      passwordInputRef.current?.focus()
    }
  }, [isEmailSignIn])

  function onClickSignInWithEmail(e: FormEvent) {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const email = formData.get('email')
    const password = formData.get('password')

    if (!isEmailSignIn) {
      // check email
      setTimeout(() => {
        setIsLoading(false)
        setIsEmailSignIn(true)

        navigate({
          search: {
            email: email as string,
            // TODO. name, imageURL도 같이 보내야함
          },
          to: '/join',
        })
      }, 1000)

      // TODO. email 없으면 회원가입으로 보내야함
    }

    if (isEmailSignIn) {
      // TODO. email, password로 로그인시키기
    }

    console.log('email', email)
    console.log('password', password)

    //TODO API 호출
  }

  function onClickGoogleLogin() {
    setIsLoading(true)

    const gsiClient = props?.gsiClient

    if (!gsiClient) {
      return
    }

    const client = gsiClient.accounts.oauth2.initCodeClient({
      callback: (response) => {
        //TODO. 코드 보내기
        console.log(
          '$$$',
          `${LAUNCH_SPY_SEVER_URL}/auth/google/login?code=${response.code}`
        )
        fetch(
          `${LAUNCH_SPY_SEVER_URL}/auth/google/login?code=${response.code}`
        ).then((res) => {
          res.json().then((data) => {
            console.log('code send result data', data)
          })
        })

        console.log('get Code', response)

        setIsLoading(false)
      },
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      error_callback: (error) => {
        // TODO. 애러 처리
        console.error('error', error)
        setIsLoading(false)
      },
      scope: 'https://www.googleapis.com/auth/userinfo.email', // https://developers.google.com/identity/protocols/oauth2/scopes?hl=ko
      ux_mode: 'popup',
    })

    client.requestCode()
  }

  return {
    isEmailSignIn,
    isLoading,
    onClickGoogleLogin,
    onClickSignInWithEmail,
    passwordInputRef,
  }
}

export default useUserAuthForm

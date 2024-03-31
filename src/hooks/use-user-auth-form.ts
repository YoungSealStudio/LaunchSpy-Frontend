import { FormEvent, useState } from 'react'

import { LAUNCH_SPY_SEVER_URL } from '@/constants'

type useUserAuthFormProps = {
  gsiClient?: typeof google
}

const useUserAuthForm = (props?: useUserAuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false)

  function onClickSignInWithEmail(e: FormEvent) {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const email = formData.get('email')
    const password = formData.get('password')

    console.log('email', email)
    console.log('password', password)

    //TODO API 호출

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
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

  return { isLoading, onClickGoogleLogin, onClickSignInWithEmail }
}

export default useUserAuthForm

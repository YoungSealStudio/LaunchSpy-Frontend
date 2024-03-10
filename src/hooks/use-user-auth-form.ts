import { FormEvent, useState } from 'react';

export default function useUserAuthForm() {
  const [isLoading, setIsLoading] = useState(false);

  function onClickSignInWithEmail(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  function onClickGoogleLogin() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return { isLoading, onClickSignInWithEmail, onClickGoogleLogin };
}

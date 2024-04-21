import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useUserAuthForm from '@/hooks/use-user-auth-form'
import { cn } from '@/lib/utils'

import { Icons } from './icons'

type UserAuthFormTypes = ReturnType<typeof useUserAuthForm>

interface UserAuthFormProps
  extends React.HTMLAttributes<HTMLDivElement>,
    UserAuthFormTypes {
  emailPlaceholder?: string
}

function UserAuthForm({
  className,
  emailPlaceholder,
  isEmailSignIn = false,
  isLoading,
  onClickGoogleLogin,
  onClickSignInWithEmail,
  passwordInputRef,
  ...props
}: UserAuthFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onClickSignInWithEmail}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isEmailSignIn}
              id="email"
              name="email"
              placeholder={emailPlaceholder ?? 'name@example.com'}
              type="email"
            />
          </div>
          {isEmailSignIn && (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                disabled={isLoading}
                id="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                ref={passwordInputRef}
                type="password"
              />
            </div>
          )}
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {isEmailSignIn ? '로그인' : '이메일로 시작 하기'}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
      <Button
        disabled={isLoading}
        onClick={onClickGoogleLogin}
        type="button"
        variant="outline"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4 text-red-600" />
        )}
        구글로 시작하기
      </Button>
    </div>
  )
}

export default UserAuthForm

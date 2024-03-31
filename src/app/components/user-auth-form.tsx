import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useUserAuthForm from '@/hooks/use-user-auth-form'
import { cn } from '@/lib/utils'

import { Icons } from './icons'

type UserAuthFormTypes = ReturnType<typeof useUserAuthForm>

interface UserAuthFormProps
  extends React.HTMLAttributes<HTMLDivElement>,
    UserAuthFormTypes {}

function UserAuthForm({
  className,
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
              placeholder="name@example.com"
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
            {isEmailSignIn ? '로그인' : '이메일로 로그인 하기'}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
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
        구글 로그인
      </Button>
    </div>
  )
}

export default UserAuthForm

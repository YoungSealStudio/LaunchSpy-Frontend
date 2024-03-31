import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { CompanySelect } from '@/app/components/company-select'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'

// 비밀번호 조건 정규표현식
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$&*?!%])[A-Za-z\d!@$%&*?]{8,15}$/

const userSchema = z
  .object({
    company: z.string().min(1, { message: '회사를 선택해 주세요.' }),
    confirmPassword: z
      .string()
      .nonempty({ message: '비밀번호를 재입력해 주세요.' }),
    email: z.string().email({ message: '이메일을 올바르게 입력해 주세요.' }),
    name: z
      .string()
      .min(2, { message: '2글자 이상 입력해 주세요.' })
      .max(100, { message: '100글자 이하 입력해 주세요.' }),
    password: z
      .string()
      .min(8, { message: '8자리 이상 입력해 주세요.' })
      .max(15, { message: '15자리 이하 입력해 주세요.' })
      .regex(passwordRegex, {
        message: '영문, 숫자, 특수문자(~!@#$%^&*)를 모두 조합해 주세요.',
      }),
    profileImageUrl: z.string().url().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

type userType = z.infer<typeof userSchema>

function UserJoinForm() {
  const router = useNavigate()
  const handleJoinClick = () => {
    form.trigger(['name', 'email', 'password'])

    const usernameState = form.getFieldState('name')
    const emailState = form.getFieldState('email')
    const passwardState = form.getFieldState('password')

    if (!usernameState.isDirty || usernameState.invalid) return
    if (!emailState.isDirty || emailState.invalid) return
    if (!passwardState.isDirty || passwardState.invalid) return
  }

  const handleSubmit = (data: userType) => {
    toast({
      className: cn(
        'data-[state=open]:sm:slide-in-from-bottom-full to data-[state=open]:sm:slide-in-from-top-full top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 duration={3000}'
      ),
      title: '🎉 회원가입이 완료되었습니다.',
    })
    setTimeout(() => {
      router({
        to: '/login',
      })
    }, 1700)
  }

  const form = useForm<userType>({
    defaultValues: {
      company: '',
      confirmPassword: '',
      email: '',
      name: '',
      password: '',
    },
    resolver: zodResolver(userSchema),
  })

  return (
    <Form {...form}>
      <form
        className="space-y-8 w-[400px]"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="이메일" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="비밀번호" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="비밀번호 확인" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="이름" type="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={() => (
            <FormItem>
              <FormControl>
                <CompanySelect
                  onSelected={(value) => {
                    form.setValue('company', value)
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CardFooter className="flex justify-center">
          <Button onClick={handleJoinClick} type="submit">
            가입하기
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}

export default UserJoinForm

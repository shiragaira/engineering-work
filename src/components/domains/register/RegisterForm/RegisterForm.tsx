import { useRegisterForm } from '@/components/domains/register/RegisterForm/useRegisterForm'
import { TextInput } from '@/components/common/TextField'
import { Button, ButtonVariants } from '@/components/common/Button'

export const RegisterForm = () => {
  const { register, onSubmit, validateEmail, isAvailableEmail, loading } = useRegisterForm()

  return (
    <form onSubmit={onSubmit} className='flex flex-col w-[320px]'>
      <TextInput
        {...register('email')}
        type='email'
        placeholder='E-mail'
        disabled={isAvailableEmail}
      />
      {!isAvailableEmail && (
        <Button
          type='button'
          variant={ButtonVariants.PRIMARY}
          onClick={validateEmail}
          loading={loading}
        >
          Check email
        </Button>
      )}

      {isAvailableEmail && (
        <>
          <TextInput {...register('registerKey')} placeholder='Secret key' />
          <TextInput {...register('password')} type='password' placeholder='Password' />
          <TextInput
            {...register('passwordConfirmation')}
            type='password'
            placeholder='Confirm password'
          />
          <TextInput {...register('firstName')} placeholder='First name' />
          <TextInput {...register('lastName')} placeholder='Last name' />
          <Button type='submit' variant={ButtonVariants.PRIMARY}>
            Register
          </Button>
        </>
      )}
    </form>
  )
}

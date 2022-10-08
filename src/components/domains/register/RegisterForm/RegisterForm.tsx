import { useRegisterForm } from '@/components/domains/register/RegisterForm/useRegisterForm'

export const RegisterForm = () => {
  const { register, onSubmit } = useRegisterForm()

  return (
    <form onSubmit={onSubmit}>
      <input {...register('email')} />
      <button type='submit'>Register</button>
    </form>
  )
}

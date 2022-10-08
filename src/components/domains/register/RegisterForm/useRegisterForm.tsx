import { useForm, UseFormRegister } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { defaultValues, RegisterFormInputs, schema } from './RegisterForm.yup'
import { SyntheticEvent } from 'react'

export interface UseRegisterFormReturn {
  register: UseFormRegister<RegisterFormInputs>
  onSubmit: (e: SyntheticEvent) => void
}

export const useRegisterForm = (): UseRegisterFormReturn => {
  const { register, handleSubmit } = useForm<RegisterFormInputs>({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const onSubmit = (formValues: RegisterFormInputs) => {
    console.log(formValues)
  }

  return { register, onSubmit: handleSubmit(onSubmit) }
}

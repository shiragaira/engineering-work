import { useForm, UseFormRegister } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { defaultValues, RegisterFormInputs, schema } from './RegisterForm.yup'
import { SyntheticEvent, useState } from 'react'
import { checkEmail, validateRegisterKey } from '@/firebase/firebase.functions'
import { useAuth } from '@/hooks/useAuth'
import { createUserProfile } from '@/firebase/firebase.firestore'

export interface UseRegisterForm {
  register: UseFormRegister<RegisterFormInputs>
  onSubmit: (e: SyntheticEvent) => void
  validateEmail: () => void
  isAvailableEmail: boolean
  loading: boolean
}

export const useRegisterForm = (): UseRegisterForm => {
  const { register, handleSubmit, getValues, trigger } = useForm<RegisterFormInputs>({
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { signUp } = useAuth()

  const [isAvailableEmail, setAvailableEmail] = useState(false)
  const [loading, setLoading] = useState(false)

  const validateEmail = async () => {
    const isValidEmail = await trigger('email')
    const email = getValues('email')

    if (isValidEmail) {
      setLoading(true)

      checkEmail({ email })
        .then((response) => {
          // @ts-ignore
          if (response?.data?.message.severity === 'SUCCESS') {
            setAvailableEmail(true)
          }
        })
        .then(() => {
          setLoading(false)
        })
        .catch((error) => console.log({ error }))
    }
  }

  const onSubmit = async (formValues: RegisterFormInputs) => {
    try {
      const response = await validateRegisterKey(formValues)
      // @ts-ignore
      if (response?.data?.message.severity === 'SUCCESS') {
        const newUser = await signUp(formValues)
        await createUserProfile(newUser, formValues)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { register, onSubmit: handleSubmit(onSubmit), validateEmail, isAvailableEmail, loading }
}

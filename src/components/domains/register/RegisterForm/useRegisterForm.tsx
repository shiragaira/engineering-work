import { useForm, UseFormRegister } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { defaultValues, RegisterFormInputs, schema } from './RegisterForm.yup'
import { SyntheticEvent, useState } from 'react'
import { checkEmail, validateRegisterKey } from '@/instances/firebase.functions'

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

  const onSubmit = (formValues: RegisterFormInputs) => {
    validateRegisterKey(formValues)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
  }

  return { register, onSubmit: handleSubmit(onSubmit), validateEmail, isAvailableEmail, loading }
}

import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup.string().email().required(),
    registerKey: yup.string().required(),
    password: yup.string().required(),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })
  .required()

export interface RegisterFormInputs {
  email: string
  registerKey: string
  password: string
  passwordConfirmation: string
  firstName: string
  lastName: string
}

export const defaultValues: RegisterFormInputs = {
  email: '',
  registerKey: '',
  password: '',
  passwordConfirmation: '',
  firstName: '',
  lastName: '',
}

import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required()

export interface RegisterFormInputs {
  email: string
}

export const defaultValues: RegisterFormInputs = {
  email: '',
}

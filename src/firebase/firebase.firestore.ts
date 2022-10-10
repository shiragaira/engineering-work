import { setDoc, doc, getFirestore } from 'firebase/firestore'
import { User } from 'firebase/auth'
import { RegisterFormInputs } from '@/components/domains/register/RegisterForm/RegisterForm.yup'

export const createUserProfile = async (user: User, registerData: RegisterFormInputs) => {
  const { uid, email } = user
  const { firstName, lastName } = registerData
  await setDoc(doc(getFirestore(), 'users', user.uid), {
    uid: uid,
    email: email,
    firstName: firstName,
    lastName: lastName,
    fullName: `${firstName} ${lastName}`,
  })
}

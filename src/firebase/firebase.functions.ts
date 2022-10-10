import { functions } from './firebase'
import { httpsCallable } from 'firebase/functions'

export const checkEmail = httpsCallable(functions, 'checkEmail')
export const validateRegisterKey = httpsCallable(functions, 'validateRegisterKey')

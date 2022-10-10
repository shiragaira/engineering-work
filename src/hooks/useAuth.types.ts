import { ReactNode } from 'react'
import { User } from 'firebase/auth'

export interface ProvideAuthProps {
  children: ReactNode
}

export interface UserCredentials {
  email: string
  password: string
}

export interface UseProvideAuthReturn {
  user: User | null
  signIn: (props: UserCredentials) => Promise<User>
  signUp: (props: UserCredentials) => Promise<User>
  logout: () => Promise<void>
}

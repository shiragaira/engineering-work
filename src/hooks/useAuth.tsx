import { createContext, useContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { ProvideAuthProps, UseProvideAuthReturn, UserCredentials } from '@/hooks/useAuth.types'

const AuthContext = createContext({} as UseProvideAuthReturn)

export function ProvideAuth({ children }: ProvideAuthProps) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth(): UseProvideAuthReturn {
  const [user, setUser] = useState<User | null>(null)

  const signIn = ({ email, password }: UserCredentials) => {
    return signInWithEmailAndPassword(getAuth(), email, password).then((response) => {
      console.log(response)
      setUser(response.user)
      return response.user
    })
  }

  const signUp = ({ email, password }: UserCredentials) => {
    return createUserWithEmailAndPassword(getAuth(), email, password).then((response) => {
      console.log(response)
      setUser(response.user)
      return response.user
    })
  }

  const logout = () => {
    return signOut(getAuth()).then(() => {
      setUser(null)
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return {
    user,
    signIn,
    signUp,
    logout,
  }
}

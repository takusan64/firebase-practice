import firebase from 'firebase/clientApp'
import { FC, createContext, useEffect, useState } from 'react'

type User = firebase.User

type AuthContextProps = {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  /* wrapped child conponents */
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}


export { AuthContext, AuthProvider }
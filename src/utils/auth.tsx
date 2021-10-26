import { useContext, useEffect } from 'react'
import { AuthContext } from "../store/auth"
import { useRouter } from 'next/router'

export const LoginListener = () => {
  const router = useRouter()
  const { currentUser } = useContext(AuthContext)
  useEffect(() => {
    if (currentUser === null) {
      router.push("/login")
    }
  }, [currentUser])
}

import { useContext } from "react"
import type { NextPage } from 'next'
import { Home } from "../components/templates/Home"
import { AuthContext } from "../store/auth"


const HomePage: NextPage = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <>
      <Home />
    </>
  )
}

export default HomePage

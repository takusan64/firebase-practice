import { useContext } from "react"
import type { NextPage } from 'next'
import Home from "../components/templates/Home"
import { AuthContext } from "../store/auth"
import { LoginListener } from "../utils/auth"


const HomePage: NextPage = () => {
  const { currentUser } = useContext(AuthContext)
  LoginListener()

  return (
    <>
      {currentUser &&
        <>
          <Home />
        </>
      }
    </>
  )
}

export default HomePage

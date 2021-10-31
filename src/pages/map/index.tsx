import { useContext } from "react"
import type { NextPage } from 'next'
import { Map } from "components/templates"
import { AuthContext } from "store/auth"
import { LoginListener } from "utils/auth"

const MapPage: NextPage = () => {
  const { currentUser } = useContext(AuthContext)
  LoginListener()

  return (
    <>
      {currentUser &&
        <>
          <Map />
        </>
      }
    </>
  )
}

export default MapPage

import { useContext } from "react"
import type {
  NextPage,
  GetStaticProps
} from 'next'
import { Map } from "components/templates"
import { AuthContext } from "store/auth"
import { LoginListener } from "utils/auth"

const MapPage: NextPage = ({ jp_geo }:any) => {
  const { currentUser } = useContext(AuthContext)
  LoginListener()

  return (
    <>
      {currentUser &&
        <>
          <Map jp_geo={jp_geo}/>
        </>
      }
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const jp_geo = (await import('../../../public/japan_geo.json')).default
  return {
      props: { jp_geo }
  }
}

export default MapPage

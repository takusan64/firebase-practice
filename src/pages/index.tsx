import type { NextPage } from 'next'
import JapanMap from '../components/JapanMap'
import firebase from "../firebase/clientApp"


const Home: NextPage = () => {

  const logout = () => {
    firebase.auth().signOut();
  }
  return (
    <>
      <button onClick={logout}>Log out</button>
      <JapanMap />
    </>
  )
}

export default Home

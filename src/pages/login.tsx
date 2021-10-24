import type { NextPage } from 'next'
import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp"

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      disableSignUp: { status: true }
    }
  ],
  credentialHelper: "none",
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: ((authResult: any, redirectUrl: string) => {
      console.log(authResult)
      console.log(redirectUrl)
      return true
    }),
    uiShown: (() => {
      console.log("finished loading")
    })
  }
}

const Login: NextPage = () => {
  return (
    <>
      <h1>Plz Login</h1>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </>
  )
}

export default Login
import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "firebase/clientApp"

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/map",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      disableSignUp: { status: true }
    }
  ],
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: (authResult: any, redirectUrl: string) => {
      authResult.user.getIdToken(true)
        .then((idToken:string) => {
          console.log(idToken)
        })
        .catch((error:any) => {
          console.log(error)
        });
      return true
    },
    uiShown: (() => {
      console.log("finished loading")
    })
  }
}

const LoginForm: React.FC = () => {
  return (
    <>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </>
  )
}

export default LoginForm
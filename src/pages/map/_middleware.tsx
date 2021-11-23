import { NextRequest, NextResponse } from 'next/server'
import { firebaseAdmin } from 'firebase/serverApp'

export function middleware(req: NextRequest) {
  console.log("This is middleware!!")
  return NextResponse.next()

  // const token = req.cookies.token
  // firebaseAdmin.auth().verifyIdToken(token)
  // .then((decodedToken) => {
  //   console.log(decodedToken.json())
  //   return NextResponse.next()
  // })
  // .catch((error) => {
  //   console.error(error)
  //   return NextResponse.redirect("/login")
  // });
}
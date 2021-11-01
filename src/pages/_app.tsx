
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

import { AuthProvider } from 'store/auth'
import { theme } from "styles/theme"
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'



const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </AuthProvider>
  )
}


export default MyApp
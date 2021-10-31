import React from "react"
import {
  useColorMode,
  useBreakpointValue,
  Box,
  Heading,
  Flex,
  Spacer,
  Center
} from '@chakra-ui/react'
import {
  MoonIcon,
  SunIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons'
import firebase from "firebase/clientApp"
import {
  ButtonBase,
  IconButtonBase
} from "components/atoms"


const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const headerSize = useBreakpointValue({ base: "xs", sm: "sm",  md: "lg" })

  const logout = () => {
    firebase.auth().signOut()
  }

  return (
    <Box borderWidth="0 0 2px 0">
      <Flex p="3">
        <Center ml="3">
          <Heading size={headerSize}>
            Trabel Memory🌍
          </Heading>
        </Center>
        <Spacer />
        <Box mr="2">
          <IconButtonBase
            label="DarkMode Switch"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Box>
        <Box mr="3">
          <ButtonBase
            name="Logout"
            onClick={logout}
            icon={<ExternalLinkIcon />}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
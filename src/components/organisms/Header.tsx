import React from "react"
import {
  IconButton,
  useColorMode,
  Box,
  Heading,
  Flex,
  Button,
  Spacer,
  Center
} from '@chakra-ui/react'
import {
  MoonIcon,
  SunIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons'
import firebase from "../../firebase/clientApp"

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const logout = () => {
    firebase.auth().signOut()
  }

  return (
    <Box borderWidth="1px">
      <Flex>
        <Center p="3" ml="4">
          <Heading as="h1" size="lg">
            Trabel Memory🌍
          </Heading>
        </Center>
        <Spacer />
        <Box p="3">
          <IconButton
            aria-label="DarkMode Switch"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Box>
        <Box p="3"  mr="4">
          <Button colorScheme="teal" onClick={logout} leftIcon={<ExternalLinkIcon />}>
            Logout
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
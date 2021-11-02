import React from "react"
import {
  useBreakpointValue,
  Box,
  Text,
  HStack,
  Container,
  Link
} from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react"
import {
  FaYoutube,
  FaGithub
} from "react-icons/fa"
import { SiQiita } from "react-icons/si"
import {
  IconButtonBase,
  TooltipBase
} from "components/atoms"

type CustomLinkIconProps = {
  label: string
  url: string
  icon: React.ReactElement
}

const CustomLinkIcon: React.FC<CustomLinkIconProps> = (props) => {
  return (
    <>
      <TooltipBase label={props.label} size="md">
        <Link href={props.url} isExternal>
          <IconButtonBase
            label={props.label}
            icon={props.icon}
          />
        </Link>
      </TooltipBase>
    </>
  )
}

const Footer: React.FC = () => {
  const footerSize = useBreakpointValue({ base: "xs", sm: "sm" })
  const iconSpacing = useBreakpointValue({ base: "4", sm: "2" })

  return (
    <>
      <Container pt="6" centerContent>
        <HStack spacing={iconSpacing}>
          <CustomLinkIcon
            label="Github"
            url="https://github.com/takusan64"
            icon={<Icon w={6} h={6} as={FaGithub} />}
          />
          <CustomLinkIcon
            label="Youtube"
            url="https://www.youtube.com/channel/UCM8zpiYU0TBTuPXOQ18JdeQ"
            icon={<Icon w={6} h={6} as={FaYoutube} />}
          />
          <CustomLinkIcon
            label="Qiita"
            url="https://qiita.com/takusan64"
            icon={<Icon w={9} h={9} as={SiQiita} />}
          />
        </HStack>
        <Box pt="1">
          <Text fontSize={footerSize}>
            Copyright © 2021 @takusan64 All Rights Resarved.
          </Text>
        </Box>
      </Container>
    </>
  )
}

export default Footer
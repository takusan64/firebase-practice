import React, { Children } from "react"
import {
  useBreakpointValue,
  Box,
  Text,
  HStack,
  Container,
  Tooltip,
  Link
} from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react"
import {
  FaYoutube,
  FaGithub
} from "react-icons/fa"
import { SiQiita } from "react-icons/si"
import {
  IconButtonBase
} from "components/atoms"

type CustomTooltipProps = {
  label: string
  size?: string
  url: string
  icon: React.ReactElement
}

const CustomLinkIcon: React.FC<CustomTooltipProps> = (props) => {
  return (
    <>
      <Tooltip label={props.label} size={props.size || "md"}>
        <Box>
          <Link href={props.url} isExternal>
            <IconButtonBase
              label={props.label}
              icon={props.icon}
            />
          </Link>
        </Box>
      </Tooltip>
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
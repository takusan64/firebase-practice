import React from "react"
import {
  useBreakpointValue,
  IconButton
} from '@chakra-ui/react'


type IconButtonBaseProps = {
  label: string
  onClick:() => void
  icon: React.ReactElement
}

export const IconButtonBase: React.FC<IconButtonBaseProps> = (props) => {
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" })

  return (
    <IconButton
      aria-label={props.label}
      icon={props.icon}
      onClick={props.onClick}
      size={buttonSize}
    />
  )
}

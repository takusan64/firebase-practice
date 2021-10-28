import React from "react"
import {
  useBreakpointValue,
  Button
} from '@chakra-ui/react'


type ButtonBaseProps = {
  name: string
  onClick:() => void
  baseColor?: string
  variant?: string
  icon?: React.ReactElement
}

export const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" })

  return (
    <Button
      onClick={props.onClick}
      size={buttonSize}
      colorScheme={props.baseColor || "blue"}
      variant={props.variant || "outline"}
      leftIcon={props.icon || undefined}
    >
      {props.name}
    </Button>
  )
}
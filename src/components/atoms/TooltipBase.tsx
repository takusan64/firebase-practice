import React from "react"
import {
  Box,
  Tooltip
} from '@chakra-ui/react'

type TooltipProps = {
  label: string
  size?: string
}

export const TooltipBase: React.FC<TooltipProps> = (props) => {
  return (
    <>
      <Tooltip label={props.label} size={props.size || "md"}>
        <Box>
          {props.children}
        </Box>
      </Tooltip>
    </>
  )
}

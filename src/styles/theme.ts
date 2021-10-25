import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

// https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
});

export const theme = extendTheme({
  breakpoints,
  // https://chakra-ui.com/docs/theming/theme#typography
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  // https://chakra-ui.com/docs/theming/theme#config
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  }
});
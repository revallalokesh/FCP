// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Default color mode
    useSystemColorMode: false, // Prevent system color mode from affecting Chakra's color mode
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100', // Light mode background color
        color: 'gray.800', // Light mode text color
        transition: 'background-color 0.2s, color 0.2s', // Smooth transition for background and text color changes
      },
    },
  },
});

export default theme;

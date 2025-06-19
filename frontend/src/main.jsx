import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme'; // Import the theme

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}> {/* Provide Chakra UI theme */}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);

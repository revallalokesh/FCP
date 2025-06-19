import { Box, useColorMode } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';

export default function App() {
  const { colorMode } = useColorMode(); // Get the color mode to dynamically change the background

  return (
    <Box
      minH="100vh"
      p={4}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} // Change background based on color mode
      color={colorMode === 'light' ? 'gray.800' : 'gray.100'} // Change text color based on color mode
      transition="background-color 0.3s" // Smooth transition for background color
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </Box>
  );
}

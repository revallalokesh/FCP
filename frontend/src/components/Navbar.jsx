import React from 'react';
import { Container, Flex, Text, Button, HStack, useColorMode, Icon } from '@chakra-ui/react'; 
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi'; // Cart icon from react-icons

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="1140px"
      px={4}
      py={2}
      bg={colorMode === 'light' ? 'white' : 'gray.900'}
      color="white"
      transition="background-color 0.3s"
      boxShadow="md"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Link to="/">
          <HStack spacing={2}>
            <Text
              fontSize={{ base: "2xl", sm: "3xl" }}
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
              bgGradient="linear(to-r, teal.300, blue.500)"
              bgClip="text"
            >
              Product Store
            </Text>
            <Icon as={FiShoppingCart} boxSize={6} color={colorMode === 'light' ? 'gray.800' : 'white'} />
          </HStack>
        </Link>

        <HStack spacing={2} alignItems="center" mt={{ base: 2, sm: 0 }}>
          <Link to="/create">
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon fontSize={20} /> : <SunIcon fontSize={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

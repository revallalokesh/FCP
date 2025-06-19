import React from 'react'
import { Container,VStack,Text, SimpleGrid } from '@chakra-ui/react'
import {useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {

  const {fetchProducts,products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);
  return (
    <div>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={8}>
          <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center" } 
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          >
            Current Products
          </Text>
          <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={10} width="full">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} /> 
            ))}
          </SimpleGrid>
          {products.length === 0 && (
            <Text fontSize="xl" textAlign="center" color="gray.500" fontWeight={'bold'}>
            No Products Found 
            <Link to="/create" style={{ textDecoration: 'none' }}>
              <Text as="span" color="blue.500" fontWeight="bold" ml={2} hover={{textDecoration: 'underline'}}>
                Create a new product
              </Text>
            </Link>  
          </Text>
          )}
        </VStack>
      </Container>
    </div>
  )
}

export default HomePage

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Image, Heading, Text, IconButton, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalCloseButton, ModalBody, Input, VStack, Button, useToast, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useProductStore } from '../store/product';

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    toast({
      title: success ? 'Success' : 'Error',
      description: message,
      status: success ? 'success' : 'error',
      isClosable: true,
    });
  };

  const handleUpdateProduct = async () => {
    const { name, price, image } = updatedProduct;
    if (!name || !price || !image) {
      toast({
        title: 'Error',
        description: 'All fields are required.',
        status: 'error',
        isClosable: true,
      });
      return;
    }

    const payload = {
      ...updatedProduct,
      price: parseFloat(price),
    };

    const { success, message } = await updateProduct(product._id, payload);
    toast({
      title: success ? 'Success' : 'Error',
      description: success ? 'Product updated successfully.' : message,
      status: success ? 'success' : 'error',
      isClosable: true,
    });

    if (success) onClose();
  };

  return (
    <Box
      shadow="lg"
      rounded="md"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
    >
      <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontSize="lg" color="gray.600">
          ${product.price.toFixed(2)}
        </Text>
        <HStack spacing={2} mt={4} justifyContent="center">
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
              />
              <Input
                placeholder="Price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
              />
              <Input
                placeholder="Image URL"
                value={updatedProduct.image}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdateProduct}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;

import { Container, Heading, SimpleGrid, Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: 599, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Smartwatch", price: 299, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Tablet", price: 449, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Camera", price: 799, image: "https://via.placeholder.com/150" },
];

const Products = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Our Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Heading size="md" mb={2}>{product.name}</Heading>
              <Text fontSize="xl" fontWeight="bold" mb={2}>${product.price}</Text>
              <Button as={Link} to={`/product/${product.id}`} colorScheme="blue">
                View Details
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;
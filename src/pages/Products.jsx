import { Container, Heading, SimpleGrid, Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Products = ({ products, filteredProducts }) => {
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Our Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {displayProducts.map((product) => (
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
      {filteredProducts.length === 0 && products.length > 0 && (
        <Box textAlign="center" width="100%">
          <Text fontSize="xl">No products found matching your search.</Text>
        </Box>
      )}
    </Container>
  );
};

export default Products;
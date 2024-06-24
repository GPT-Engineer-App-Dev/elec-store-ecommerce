import { useState, useEffect } from "react";
import { Container, Heading, SimpleGrid, Box, Image, Text, Button, Input, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import products from "../data/products";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading mb={6}>Our Products</Heading>
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="lg"
        />
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {filteredProducts.map((product) => (
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
      </VStack>
    </Container>
  );
};

export default Products;
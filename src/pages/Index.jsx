import { Container, Heading, Text, Button, VStack, Image, SimpleGrid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const featuredProducts = [
  { id: 1, name: "Smartphone", price: 599, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="xl" mb={6}>Discover the latest in electronics and technology</Text>
          <Button as={Link} to="/products" size="lg" colorScheme="blue">
            Shop Now
          </Button>
        </Box>

        <Box>
          <Heading size="xl" mb={6}>Featured Products</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {featuredProducts.map((product) => (
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
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
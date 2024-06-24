import { Container, Text, VStack, Grid, GridItem, Box, Heading, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", description: "Latest model with advanced features" },
  { id: 2, name: "Laptop", description: "High performance for work and play" },
  { id: 3, name: "Smartwatch", description: "Keep track of your health and notifications" },
  { id: 4, name: "Headphones", description: "Noise-cancelling over-ear headphones" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <HStack justifyContent="space-between" width="100%">
          <Heading as="h1" size="xl">Electronics Store</Heading>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
          </HStack>
        </HStack>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6} width="100%">
          {products.map(product => (
            <GridItem key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Box>
                <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
                <Text>{product.description}</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
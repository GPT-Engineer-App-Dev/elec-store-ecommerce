import { useParams } from "react-router-dom";
import { Container, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <Container centerContent><Heading>Product not found</Heading></Container>;
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Image src={product.image} alt={product.name} borderRadius="md" />
        <Heading>{product.name}</Heading>
        <Text fontSize="2xl" fontWeight="bold">${product.price}</Text>
        <Text>{product.description}</Text>
        <Button colorScheme="blue" size="lg">Add to Cart</Button>
      </VStack>
    </Container>
  );
};

export default ProductDetail;
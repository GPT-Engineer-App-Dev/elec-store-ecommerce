import { useParams } from "react-router-dom";
import { Container, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";

const products = [
  { id: 1, name: "Smartphone", price: 599, image: "https://via.placeholder.com/300", description: "A high-end smartphone with advanced features." },
  { id: 2, name: "Laptop", price: 999, image: "https://via.placeholder.com/300", description: "Powerful laptop for work and entertainment." },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/300", description: "Wireless headphones with noise cancellation." },
  { id: 4, name: "Smartwatch", price: 299, image: "https://via.placeholder.com/300", description: "Fitness tracker and smartwatch in one." },
  { id: 5, name: "Tablet", price: 449, image: "https://via.placeholder.com/300", description: "Versatile tablet for productivity and entertainment." },
  { id: 6, name: "Camera", price: 799, image: "https://via.placeholder.com/300", description: "High-resolution digital camera for photography enthusiasts." },
];

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
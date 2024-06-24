import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.xl" mx="auto" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Spacer />
        <Button as={Link} to="/" mr={2}>Home</Button>
        <Button as={Link} to="/products">Products</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
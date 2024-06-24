import { Box, Flex, Heading, Spacer, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery);
  };
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.xl" mx="auto" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Spacer />
        <InputGroup size="md" maxW="300px" mr={4}>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleSearch}>
              <FaSearch />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button as={Link} to="/" mr={2}>Home</Button>
        <Button as={Link} to="/products">Products</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
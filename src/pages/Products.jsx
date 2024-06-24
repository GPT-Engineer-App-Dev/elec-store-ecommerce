import React from 'react';
import { Container, Heading, SimpleGrid, Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductContext } from '../contexts/ProductContext';
import ProductFilters from '../components/ProductFilters';

const Products = () => {
  const {
    filteredProducts,
    selectedCategories,
    selectedBrands,
    priceRange,
    handleCategoryChange,
    handleBrandChange,
    handlePriceRangeChange
  } = useProductContext();

  const categories = [...new Set(filteredProducts.map(product => product.category))];
  const brands = [...new Set(filteredProducts.map(product => product.brand))];

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Our Products</Heading>
      <Flex>
        <ProductFilters
          categories={categories}
          brands={brands}
          priceRange={priceRange}
          onCategoryChange={handleCategoryChange}
          onBrandChange={handleBrandChange}
          onPriceRangeChange={handlePriceRangeChange}
        />
        <Box flex={1} ml={6}>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {filteredProducts.map((product) => (
              <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={4}>
                  <Heading size="md" mb={2}>{product.name}</Heading>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>${product.price}</Text>
                  <Text mb={2}>{product.category}</Text>
                  <Text mb={2}>{product.brand}</Text>
                  <Button as={Link} to={`/product/${product.id}`} colorScheme="blue">
                    View Details
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          {filteredProducts.length === 0 && (
            <Box textAlign="center" width="100%">
              <Text fontSize="xl">No products found matching your criteria.</Text>
            </Box>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default Products;
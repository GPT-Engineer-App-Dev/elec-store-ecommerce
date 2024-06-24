import { useState } from "react";
import { Container, Heading, SimpleGrid, Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductFilters from "../components/ProductFilters";

const Products = ({ products, filteredProducts }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleFilterChange = (newCategories, newBrands, newPriceRange) => {
    setCategories(newCategories);
    setBrands(newBrands);
    setPriceRange(newPriceRange);
  };

  const applyFilters = (products) => {
    return products.filter(product => {
      const inCategory = categories.length === 0 || categories.includes(product.category);
      const inBrand = brands.length === 0 || brands.includes(product.brand);
      const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      return inCategory && inBrand && inPriceRange;
    });
  };

  const displayProducts = applyFilters(filteredProducts.length > 0 ? filteredProducts : products);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Our Products</Heading>
      <ProductFilters 
        categories={categories} 
        brands={brands} 
        priceRange={priceRange} 
        onFilterChange={handleFilterChange} 
      />
      <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={6}>
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
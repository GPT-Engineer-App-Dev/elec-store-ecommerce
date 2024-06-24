import React from 'react';
import { Box, VStack, Heading, Checkbox, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Text } from "@chakra-ui/react";

const ProductFilters = ({ categories, brands, priceRange, onCategoryChange, onBrandChange, onPriceRangeChange }) => {
  return (
    <Box width="250px" p={4} borderWidth={1} borderRadius="lg">
      <VStack align="start" spacing={6}>
        <Box>
          <Heading size="md" mb={2}>Categories</Heading>
          {categories.map(category => (
            <Checkbox key={category} onChange={(e) => onCategoryChange(category, e.target.checked)}>
              {category}
            </Checkbox>
          ))}
        </Box>

        <Box>
          <Heading size="md" mb={2}>Brands</Heading>
          {brands.map(brand => (
            <Checkbox key={brand} onChange={(e) => onBrandChange(brand, e.target.checked)}>
              {brand}
            </Checkbox>
          ))}
        </Box>

        <Box width="100%">
          <Heading size="md" mb={2}>Price Range</Heading>
          <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={[priceRange.min, priceRange.max]}
            min={0}
            max={2000}
            step={10}
            onChangeEnd={(val) => onPriceRangeChange(val[0], val[1])}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Text mt={2}>
            ${priceRange.min} - ${priceRange.max}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ProductFilters;
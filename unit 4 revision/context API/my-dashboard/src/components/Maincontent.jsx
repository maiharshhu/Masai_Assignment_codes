import React from "react";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";

const sampleProducts = [
  "Product Alpha",
  "Product Beta",
  "Product Gamma",
  "Product Delta",
  "Product Epsilon",
  "Product Zeta",
];

export default function MainContent() {
  const { isAuthenticated } = useAuth();

  return (
    <Box p={4} bg="transparent">
      <Heading as="h2" size="md" mb={4} color="var(--text)">
        {isAuthenticated ? "Welcome to your dashboard" : "Public Dashboard"}
      </Heading>

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {sampleProducts.map((name) => (
          <GridItem key={name}>
            <Box
              p={4}
              borderRadius="md"
              boxShadow="sm"
              bg="var(--card-bg)"
              color="var(--text)"
            >
              <Text fontWeight="bold">{name}</Text>
              <Text fontSize="sm" mt={2}>
                Sample product description.
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

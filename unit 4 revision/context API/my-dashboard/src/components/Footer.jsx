import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTheme } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <Box
      as="footer"
      py={3}
      bg="var(--footer-bg)"
      color="var(--text)"
      position="sticky"
      bottom="0"
      zIndex={10}
      textAlign="center"
    >
      <Text>© 2025 My Dashboard — Theme: {theme}</Text>
    </Box>
  );
}

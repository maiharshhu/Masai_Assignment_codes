import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/Maincontent";
import Footer from "./components/Footer";
import { useTheme } from "./contexts/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    <Flex
      direction="column"
      minH="100vh"
      className={theme === "light" ? "theme-light" : "theme-dark"}
    >
      <Navbar />
      <Flex flex="1" w="100%">
        <Sidebar />
        <Box flex="1">
          <MainContent />
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
}

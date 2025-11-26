import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { user, login, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={4}
      py={3}
      boxShadow="sm"
      bg="var(--nav-bg)"
      color="var(--text)"
    >
      <Text fontWeight="bold">My Dashboard</Text>

      <Flex align="center" gap={3}>
        <Button size="sm" onClick={toggleTheme}>
          Theme: {theme === "light" ? "Light" : "Dark"}
        </Button>

        {isAuthenticated ? (
          <>
            <Text display={{ base: "none", md: "block" }}>{user.name}</Text>
            <Button size="sm" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button size="sm" onClick={() => login("Alice")}>
            Login
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

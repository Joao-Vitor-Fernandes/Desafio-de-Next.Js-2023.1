import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, IconButton, useDisclosure, VStack, Box, Text, Stack, HStack } from "@chakra-ui/react";

const MenuToggle = ({ toggle }: { toggle: () => void }) => {
  return (
    <IconButton
      size={"md"}
      icon={<HamburgerIcon />}
      aria-label={"Open Menu"}
      display={{ md: "none" }}
      onClick={toggle}
    />
  );
};

const MenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  );
};

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <VStack spacing={4} alignItems="stretch">
        <HStack>
            
        <MenuItem>Página Inicial</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <MenuItem>Contato</MenuItem>
        </HStack>
      </VStack>
    </Box>
  );
};

export function Nav() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex justify="space-between" align="center" py={4} px={8} bg="gray.900" color="white">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">Logo</Text>
      </Box>
      <MenuToggle toggle={onToggle} />
      <MenuLinks isOpen={isOpen} />
    </Flex>
  );
}

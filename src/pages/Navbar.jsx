// File: src/components/Navbar.jsx
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link as ChakraLink,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(ChakraLink);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/productsService' },
  { name: 'About', path: '/about' },
  { name: 'Login/Signup', path: '/auth' },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <Box bg="gray.900" px={4} boxShadow="md" position="sticky" top="0" zIndex="999">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        
        {/* 👇 Logo Image here instead of text */}
        <Box>
          <Link to="/">
            <Image
              src="/assets/nanaji logo.png" // ✅ Path to your logo
              alt="Nana Ji Garage Logo"
              boxSize="50px"
              objectFit="cover"
              borderRadius="full"
              cursor="pointer"
            />
          </Link>
        </Box>

        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="gray.700"
        />

        <HStack spacing={8} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <MotionLink
              key={link.name}
              as={Link}
              to={link.path}
              px={4}
              py={2}
              rounded="md"
              fontWeight="medium"
              color={location.pathname === link.path ? 'red.400' : 'gray.200'}
              whileHover={{ scale: 1.1, color: '#f56565' }}
              transition={{ type: 'spring', stiffness: 300 }}
              _hover={{ textDecoration: 'none', bg: 'gray.700' }}
            >
              {link.name}
            </MotionLink>
          ))}
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {navLinks.map((link) => (
              <ChakraLink
                as={Link}
                to={link.path}
                key={link.name}
                px={4}
                py={2}
                fontWeight="medium"
                color={location.pathname === link.path ? 'red.400' : 'gray.200'}
                _hover={{ textDecoration: 'none', bg: 'gray.700', color: 'red.400' }}
                onClick={onClose}
              >
                {link.name}
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

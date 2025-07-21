// File: src/pages/AuthForm.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

export default function Authform() {
  const [isLogin, setIsLogin] = useState(true);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: isLogin ? "Logged in!" : "Account created!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      bgGradient="linear(to-br, gray.900, gray.800)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      <AnimatePresence mode="wait">
        <MotionBox
          key={isLogin ? "login" : "signup"}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          bg="gray.700"
          p={10}
          rounded="2xl"
          shadow="2xl"
          w={['full', '400px']}
        >
          <VStack as="form" onSubmit={handleSubmit} spacing={6}>
            <Heading
              size="lg"
              color="white"
              textAlign="center"
              bgGradient="linear(to-r, red.400, yellow.400)"
              bgClip="text"
            >
              {isLogin ? "Login" : "Sign Up"}
            </Heading>

            {!isLogin && (
              <FormControl id="name">
                <FormLabel color="gray.300">Name</FormLabel>
                <Input type="text" placeholder="Your Name" />
              </FormControl>
            )}

            <FormControl id="email">
              <FormLabel color="gray.300">Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl id="password">
              <FormLabel color="gray.300">Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>

            <Button
              type="submit"
              colorScheme="red"
              w="full"
              size="lg"
              rounded="xl"
            >
              {isLogin ? "Login" : "Create Account"}
            </Button>

            <Button
              variant="link"
              color="yellow.300"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "New here? Create an account"
                : "Already have an account? Login"}
            </Button>
          </VStack>
        </MotionBox>
      </AnimatePresence>
    </Box>
  );
}

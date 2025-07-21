// src/pages/ProductDetail.jsx
import React, { useEffect, useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Button,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useLocation, useNavigate } from 'react-router-dom'; // ⬅️ useNavigate imported here

const MotionBox = motion(Box);

export default function ProductDetail() {
  const detailRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate(); // ⬅️ useNavigate hook
  const service = location.state?.service;

  useEffect(() => {
    if (detailRef.current) {
      gsap.from(detailRef.current, {
        duration: 1.2,
        y: 50,
        ease: 'power3.out',
        stagger: 0.2,
      });
    }
  }, []);

  if (!service) {
    return (
      <Box textAlign="center" py={20} color="white">
        <Heading>404 - Service Not Found</Heading>
        <Text mt={4}>Please go back and select a valid service.</Text>
        <Button mt={6} onClick={() => navigate('/productsService')} colorScheme="red">
          Back to Services
        </Button>
      </Box>
    );
  }

  return (
    <Box bg="gray.900" color="white" minH="100vh" px={6} py={10}>
      <Stack
        direction={['column', 'row']}
        spacing={10}
        align="center"
        justify="center"
        maxW="6xl"
        mx="auto"
      >
        <MotionBox
          ref={detailRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          w={['100%', '50%']}
          rounded="xl"
          objectFit="Contain"
          overflow="hidden"
          boxShadow="2xl"
        >
          <Image
            src={service.image}
            alt={service.title}
            w="full"
            h={['250px', '400px']}
            objectFit="cover"
          />
        </MotionBox>

        <VStack
          align="start"
          spacing={6}
          w={['100%', '50%']}
        >
          <Heading size="2xl" bgGradient="linear(to-r, red.400, yellow.400)" bgClip="text">
            {service.title}
          </Heading>
          <Text fontSize="lg" color="gray.300">
            {service.desc}
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.400">
            ₹{service.price} /-
          </Text>

          <Button colorScheme="red" size="lg" px={10}>
            Book Service Now
          </Button>

          {/* ⬇️ Go Back Button */}
          <Button
            colorScheme="green"
            variant="outline"
            onClick={() => navigate('/Services')}
          >
            ← Back to Services
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

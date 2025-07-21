// src/pages/ServiceList.jsx
import React from 'react';
import {
  Box,
  Button,
  Image,
  Text,
  SimpleGrid,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Engine Repair',
    desc: 'Complete engine diagnostics and repair.',
    price: 2500,
    image: '/assets/engine.png',
  },
  {
    id: 2,
    title: 'Car Repair',
    desc: 'Complete car repaire service.',
    price: 2000,
    image: '/assets/four-wheeler.png',
  },
  {
    id: 3,
    title: 'Bike Repair',
    desc: 'Completle Bike repair Service.',
    price: 500,
    image: '/assets/two-wheeler.png',
  },
  {
    id: 4,
    title: 'Denting',
    desc: 'High-quality denting service.',
    price: 5000,
    image: '/assets/denting.png',
  },
  {
    id: 5,
    title: 'Oil Change',
    desc: 'Regular oil change and engine health check.',
    price: 500,
    image: '/assets/oil.png',
  },
];

export default function ServiceList() {
  const navigate = useNavigate();

  return (
    <Box bg="gray.900" color="white" minH="100vh" p={8}>
      <Heading textAlign="center" mb={10} color="red.400">
        Our Services
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {services.map((service) => (
          <Box
            key={service.id}
            bg="gray.800"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            _hover={{ transform: 'scale(1.03)', transition: '0.3s' }}
          >
            <Image
              src={service.image}
              alt={service.title}
              w="100%"
              h="200px"
              objectFit="contain"
              bg="gray.900"
              p={4}
            />
            <VStack align="start" p={4} spacing={2}>
              <Text fontSize="xl" fontWeight="bold" color="red.300">
                {service.title}
              </Text>
              <Text fontSize="md" color="gray.300">
                {service.desc}
              </Text>
              <Text fontSize="lg" color="green.300" fontWeight="bold">
                ₹{service.price}
              </Text>
              <Button
                mt={2}
                colorScheme="red"
                size="sm"
                onClick={() =>
                  navigate(`/productDetail/${service.id}`, {
                    state: { service },
                  })
                }
              >
                View Details
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

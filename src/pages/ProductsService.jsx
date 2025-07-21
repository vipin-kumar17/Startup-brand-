// File: src/pages/Services.jsx
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Button,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const servicesData = [
  {
    title: 'Two-Wheeler Service',
    desc: 'Complete bike & scooter maintenance with genuine parts.',
    image: '/assets/two-wheeler.png',
    type: 'bike',
  },
  {
    title: 'Four-Wheeler Service',
    desc: 'Car service for all brands with advanced equipment.',
    image: '/assets/four-wheeler.png',
    type: 'car',
  },
  {
    title: 'Denting & Painting',
    desc: 'Scratch removal, full body paint with color match.',
    image: '/assets/denting.png',
    type: 'car',
  },
  {
    title: 'Engine Diagnostics',
    desc: 'Engine scanning and error code troubleshooting.',
    image: '/assets/engine.png',
    type: 'both',
  },
  {
    title: 'Oil Change',
    desc: 'Synthetic and mineral oil change with filter replacement.',
    image: '/assets/oil.png',
    type: 'both',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Services() {
  const [filter, setFilter] = useState('all');

  const filteredServices = servicesData.filter((s) => {
    if (filter === 'all') return true;
    return s.type === filter || s.type === 'both';
  });

  return (
    <Box bg="gray.900" minH="120vh" color="white" px={6} py={10}>
      <Heading
        size="2xl"
        mb={4}
        textAlign="center"
        bgGradient="linear(to-r, red.400, yellow.400)"
        bgClip="text"
      >
        Our Premium Services
      </Heading>
      <Text textAlign="center" mb={8} color="gray.400">
        Choose your vehicle type to explore the offerings.
      </Text>

      <HStack justify="center" spacing={4} mb={10}>
        {['all', 'bike', 'car'].map((type) => (
          <Button
            key={type}
            variant={filter === type ? 'solid' : 'outline'}
            colorScheme="red"
            onClick={() => setFilter(type)}
          >
            {type === 'all' ? 'All' : type === 'bike' ? 'Two-Wheeler' : 'Four-Wheeler'}
          </Button>
        ))}
      </HStack>

      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
        {filteredServices.map((service, i) => (
          <MotionBox
            key={i}
            custom={i}
            initial="hidden"
            animate="show"
            variants={cardVariant}
            whileHover={{
              scale: 1.05,
              rotateX: 8,
              rotateY: -8,
              transition: { type: 'spring', stiffness: 200, damping: 15 },
            }}
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
            bg="#1a202c"
            rounded="xl"
            overflow="hidden"
            minH="380px"
            h="100%"
            shadow="lg"
          >
            <VStack spacing={4} align="start" p={4} h="full">
              <Image
                src={service.image}
                alt={service.title}
                borderRadius="md"
                w="full"
                h="180px"
                objectFit="cover"
              />
              <Heading size="md">{service.title}</Heading>
              <Text fontSize="sm" color="gray.300">
                {service.desc}
              </Text>
              <Button colorScheme="red" mt="auto">
                View Details
              </Button>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}

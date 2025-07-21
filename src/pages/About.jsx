// src/pages/About.jsx
import React from "react";
import { Box, Heading, Text, Image, VStack, Stack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const MotionBox = motion(Box);

const achievements = [
  "Founded Nana Ji Garage in 2010",
  "Served 10,000+ happy clients",
  "Awarded Best Local Garage 2023",
  "Launched eco-friendly vehicle servicing"
];

const testimonials = [
  {
    name: "Sohan Sharma",
    feedback: "Nana Ji Garage is the most reliable place for car repairs! Highly recommended.",
  },
  {
    name: "Aman Yadav",
    feedback: "Amazing customer service and quick work! Totally trust them with my car.",
  },

];

const timeline = [
  { year: "2002", event: "Garage Established" },
  { year: "2010", event: "Expanded to multi-brand servicing" },
  { year: "2012", event: "Launched mobile service vans" },
  { year: "2023", event: "Awarded Best Garage in City" },
];

export default function About() {
  return (
    <Box bg="gray.900" color="white" minH="100vh" p={8}>
      <VStack spacing={10} align="center">
        
          <MotionBox
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            w="full"
          >
            <VStack spacing={4} align="center" textAlign="center" maxW="3xl" mx="auto">
              <Heading
                size="2xl"
                bgGradient="linear(to-r, red.400, yellow.400)"
                bgClip="text"
              >
                Meet the Founder
              </Heading>
              <Image
                borderRadius="full"
                boxSize={["150px", "200px"]}
                src="/assets/nanaji logo.png"
                alt="Founder Image"
                objectFit="cover"
                boxShadow="lg"
                mx="auto"
              />
              <Text fontSize="lg">
                Nana Ji, the heart and soul of our garage, started this journey over a
                decade ago with a passion for automobiles and a commitment to trust and
                excellence.
              </Text>
            </VStack>
          </MotionBox>

        

        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          w="full"
          maxW="4xl"
        >
          <Heading size="lg" mb={4}>
            Achievements
          </Heading>
          <VStack spacing={3} align="start">
            {achievements.map((ach, idx) => (
              <Text key={idx}>✅ {ach}</Text>
            ))}
          </VStack>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          w="full"
          maxW="4xl"
        >
          <Heading size="lg" mb={4}>
            Our Journey
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={6}>
            {timeline.map((item, idx) => (
              <Box key={idx} p={4} bg="gray.700" rounded="md" shadow="md">
                <Text fontWeight="bold">{item.year}</Text>
                <Text>{item.event}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          w="full"
          maxW="4xl"
        >
          <Heading size="lg" mb={4}>
            Testimonials
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={6}>
            {testimonials.map((t, idx) => (
              <Box key={idx} p={4} bg="gray.800" rounded="lg" shadow="xl">
                <FaQuoteLeft size={20} color="orange" />
                <Text mt={2} fontStyle="italic">
                  "{t.feedback}"
                </Text>
                <Text mt={2} fontWeight="bold">- {t.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </MotionBox>
      </VStack>
    </Box>
  );
}

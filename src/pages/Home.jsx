// File: src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Heading,
    Text,
    Button,
    Input,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
    return (
        <Box
            className="min-h-screen relative text-white flex flex-col justify-center items-center"
            bg="gray.900"
        >
            {/* ✅ Background Image with Blur */}
            <Box
                position="absolute"
                top={0}
                left={0}
                w="full"
                h="full"
                bgImage="url('/assets/car.jpg')"
                bgSize="cover"
                bgPosition="center"
                opacity={0.15}
                zIndex={0}
                filter="blur(1px)"
            />

            {/* ✅ Main Content */}
            <Box zIndex={1} position="relative" p={6} textAlign="center">
                {/* Heading with Animation */}
                <motion.div
                    initial={{ y: -50, opacity: 0, rotateX: 90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 1, ease: 'backOut' }}
                >
                    <Heading
                        size="2xl"
                        sx={{
                            bgGradient: 'linear(to-r, #FFD700, #FF8C00)',
                            bgClip: 'text',
                            fontWeight: 'extrabold',
                        }}
                        mb={8}
                    >
                        Welcome to NANA JI GARAGE
                    </Heading>
                </motion.div>

                {/* Subheading */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <Text fontSize="xl" mb={10}>
                        Your trusted automobile service partner for Two-Wheelers & Four-Wheelers
                    </Text>
                </motion.div>

                {/* Social Icons */}
                <HStack spacing={6} justify="center" mb={10}>
                    {/* Facebook */}
                    <Box perspective="1000px">
                        <motion.div
                            whileHover={{ scale: 1.2, rotateY: 15 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{ display: 'inline-block', cursor: 'pointer' }}
                        >
                            <Box color="gray.300" _hover={{ color: '#3b5998' }}>
                                <FaFacebook size={28} />
                            </Box>
                        </motion.div>
                    </Box>

                    {/* Instagram */}
                    <Box perspective="1000px">
                        <motion.div
                            whileHover={{ scale: 1.2, rotateY: 15 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{ display: 'inline-block', cursor: 'pointer' }}
                        >
                            <Box color="gray.300" _hover={{ color: '#E1306C' }}>
                                <FaInstagram size={28} />
                            </Box>
                        </motion.div>
                    </Box>

                    {/* WhatsApp */}
                    <Box perspective="1000px">
                        <motion.div
                            whileHover={{ scale: 1.2, rotateY: 15 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{ display: 'inline-block', cursor: 'pointer' }}
                        >
                            <Box color="gray.300" _hover={{ color: '#25D366' }}>
                                <FaWhatsapp size={28} />
                            </Box>
                        </motion.div>
                    </Box>
                </HStack>



                {/* Newsletter */}
                <VStack spacing={3} maxW="md" mx="auto" mb={6}>
                    <Text>Subscribe to our newsletter for service tips & offers</Text>
                    <HStack w="full">
                        <Input
                            placeholder="Enter your email"
                            size="md"
                            bg="white"
                            color="black"
                            _placeholder={{ color: 'gray.500' }}
                        />
                        <Button colorScheme="red">Subscribe</Button>
                    </HStack>
                </VStack>

                {/* CTA Button with hover effect */}
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Button size="lg" colorScheme="red">
                        Explore Services
                    </Button>
                </motion.div>
            </Box>
        </Box>
    );
}

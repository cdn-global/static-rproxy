import { Box, Flex, Grid, Heading, Image, Text, VStack, Button, Link } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Common/Footer';

export const Route = createFileRoute("/_layout/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <HeroSection
        title="Seamless Global Web Access with Roaming Proxy"
        subtitle="Unlock the web with our HTTPS proxy network, optimized for web scraping, data collection, and AI-driven insights."
        ctas={[
          { text: "Get Started", link: "https://console.roamingproxy.com" },
          { text: "Request Demo", link: "/demo-request" },
        ]}
        bgImage="https://images.unsplash.com/photo-1625685554528-2a0b517e094c"
      />
      
      {/* Section 3: Proxy Network Coverage */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Heading as="h2" size="2xl" textAlign="center" mb={10} fontWeight="medium">
          Global Roaming Proxy Network
        </Heading>
        <Flex justify="space-around" flexWrap="wrap" maxW="1200px" mx="auto" px={4}>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">195+</Text>
            <Text fontSize="lg">Countries Covered</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">99.9%</Text>
            <Text fontSize="lg">Uptime Guarantee</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">24/7</Text>
            <Text fontSize="lg">Expert Support</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">12M+</Text>
            <Text fontSize="lg">Dynamic IPs</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">Unlimited</Text>
            <Text fontSize="lg">Data Transfer</Text>
          </VStack>
        </Flex>
      </Box>
      
      {/* Cloud Provider Links */}
      <Box py={10} bg="blue.50">
        <Flex justify="center" gap={8} flexWrap="wrap">
          <Link href="https://aws.amazon.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png"
              alt="AWS Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://cloud.google.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png"
              alt="GCP Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://azure.microsoft.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png"
              alt="Microsoft Azure Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://www.ibm.com/cloud" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ibm_cloud.png"
              alt="IBM Cloud Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://www.digitalocean.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/digital_ocean.png"
              alt="Digital Ocean Logo"
              boxSize="50px"
            />
          </Link>
        </Flex>
      </Box>

      {/* Section 2: Proxy Features */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium" pb="5">
          Advanced Features for Effortless Web Scraping
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Robust Security
            </Heading>
            <Text color="gray.600">
              Military-grade encryption and secure protocols for safe data access
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Lightning-Fast Speeds
            </Heading>
            <Text color="gray.600">
              Optimized infrastructure for rapid data extraction
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Cloud Integration
            </Heading>
            <Text color="gray.600">
              Seamless compatibility with major cloud platforms
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Dynamic IP Roaming
            </Heading>
            <Text color="gray.600">
              Intelligent IP rotation to bypass anti-bot defenses
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Ethical Compliance
            </Heading>
            <Text color="gray.600">
              Fully compliant with GDPR, ISO 27001, and SOC 2 standards
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="center">
              Scalable Scraping
            </Heading>
            <Text color="gray.600">
              Cost-effective solutions for businesses of all sizes
            </Text>
          </VStack>
        </Grid>
      </Box>

      <Box py={16} bg="blue.50" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Empower Your Business with Roaming Proxy
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" mb={8} maxW="800px" mx="auto">
          Our HTTPS proxy network is built to support diverse business needs, delivering reliable data for strategic growth and innovation.
        </Text>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Market Intelligence
            </Heading>
            <Text color="gray.600">
              Extract global market trends and competitor data to drive strategic decisions with reliable proxy access.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              AI Training Data
            </Heading>
            <Text color="gray.600">
              Collect high-quality, ethical datasets for machine learning with our robust proxy infrastructure.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Price Tracking
            </Heading>
            <Text color="gray.600">
              Monitor real-time pricing across e-commerce platforms to optimize your pricing strategy.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Content Aggregation
            </Heading>
            <Text color="gray.600">
              Build powerful data hubs by aggregating content from diverse sources without IP blocks.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Lead Generation
            </Heading>
            <Text color="gray.600">
              Extract contact data from professional networks to supercharge your sales pipeline.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              SEO Optimization
            </Heading>
            <Text color="gray.600">
              Track localized search rankings and competitor SEO strategies with global proxy coverage.
            </Text>
          </VStack>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Start Scraping with Roaming Proxy Today
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Harness the power of our HTTPS proxy API to extract structured web data for your business needs.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="blue.600"
              _hover={{ bg: "gray.200" }}
              as="a"
              href="https://console.roamingproxy.com"
            >
              Get Started Now
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "white", color: "blue.600" }}
              as="a"
              href="/contact"
            >
              Contact Sales
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default LandingPage;
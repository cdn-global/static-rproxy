import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon, HStack, Badge, Progress } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, TimeIcon, WarningIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/status")({
  component: NetworkStatusPage,
});

function NetworkStatusPage() {
  const networkMetrics = [
    { metric: "Availability", value: "99.92%", period: "Past 30 days", trend: "increase", trendValue: "0.015%" },
    { metric: "Mean Latency", value: "85ms", period: "Past 24 hours", trend: "decrease", trendValue: "12ms" },
    { metric: "Completion Rate", value: "99.97%", period: "Past 24 hours", trend: "increase", trendValue: "0.08%" },
    { metric: "Live Proxies", value: "15.2M+", period: "Now", trend: "increase", trendValue: "83K" },
    { metric: "System Load", value: "22%", period: "Now", trend: "decrease", trendValue: "4%" },
    { metric: "Request Volume", value: "1.4M", period: "Hourly", trend: "increase", trendValue: "12%" },
  ];

  const serviceStatus = [
    { service: "Home Proxies", status: "Fully Functional", performance: 100, lastIncident: "21 days ago" },
    { service: "Server Proxies", status: "Fully Functional", performance: 100, lastIncident: "43 days ago" },
    { service: "Cellular Proxies", status: "Fully Functional", performance: 98, lastIncident: "2 days ago" },
    { service: "API Interfaces", status: "Fully Functional", performance: 100, lastIncident: "15 days ago" },
    { service: "Control Panel", status: "Fully Functional", performance: 100, lastIncident: "37 days ago" },
    { service: "Login System", status: "Fully Functional", performance: 100, lastIncident: "60+ days ago" },
  ];

  const regionStatus = [
    { region: "North America", status: "Running Smoothly", performance: 100, activeNodes: "1.8M+" },
    { region: "Europe", status: "Running Smoothly", performance: 100, activeNodes: "2.7M+" },
    { region: "Asia-Pacific", status: "Slight Disruptions", performance: 97, activeNodes: "535K+" },
    { region: "Latin America", status: "Running Smoothly", performance: 99, activeNodes: "280K+" },
    { region: "Middle East & Africa", status: "Running Smoothly", performance: 99, activeNodes: "120K+" },
    { region: "Oceania", status: "Running Smoothly", performance: 100, activeNodes: "40K+" },
  ];

  const recentIncidents = [
    {
      date: "March 25, 2025",
      title: "Asia-Pacific Latency Spike",
      status: "Fixed",
      description: "Elevated delays in Asia-Pacific proxies due to underwater cable repairs. Rerouting resolved the issue.",
      resolution: "12:45 UTC"
    },
    {
      date: "March 22, 2025",
      title: "Mobile Proxy Connectivity Glitches",
      status: "Fixed",
      description: "Spotty connections with mobile proxies in some areas, linked to a carrier settings update.",
      resolution: "16:20 UTC"
    },
    {
      date: "March 10, 2025",
      title: "Control Panel Load Delays",
      status: "Fixed",
      description: "Control panel faced sluggish load times during a database tuning task. Normal speed resumed post-indexing.",
      resolution: "08:30 UTC"
    }
  ];

  return (
    <>
      {/* Network Status Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            System Health Overview
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Live tracking of our worldwide proxy network. 
            Monitor efficiency, uptime, and past disruptions across services and regions.
          </Text>
          
          <Flex justify="center" mb={8}>
            <Badge colorScheme="green" fontSize="lg" py={2} px={6} borderRadius="full">
              All Services Running Normally
            </Badge>
          </Flex>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="center" bg="white" p={6} borderRadius="md" spacing={4}>
              <Stat textAlign="center">
                <StatNumber color="green.500">99.997%</StatNumber>
                <StatLabel>System Uptime</StatLabel>
                <StatHelpText>Past 30 days</StatHelpText>
              </Stat>
            </VStack>
            
            <VStack flex="1" minW="280px" align="center" bg="white" p={6} borderRadius="md" spacing={4}>
              <Stat textAlign="center">
                <StatNumber color="green.500">84ms</StatNumber>
                <StatLabel>Average Delay</StatLabel>
                <StatHelpText>Worldwide average</StatHelpText>
              </Stat>
            </VStack>
            
            <VStack flex="1" minW="280px" align="center" bg="white" p={6} borderRadius="md" spacing={4}>
              <Stat textAlign="center">
                <StatNumber color="green.500">0</StatNumber>
                <StatLabel>Ongoing Issues</StatLabel>
                <StatHelpText>Refreshed every minute</StatHelpText>
              </Stat>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Real-time Metrics Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Current Network Statistics
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={8} mt={10}>
            {networkMetrics.map((metric, index) => (
              <VStack key={index} align="flex-start" bg="gray.50" p={6} borderRadius="md" spacing={3}>
                <Stat>
                  <StatLabel color="gray.500" fontSize="sm">{metric.metric}</StatLabel>
                  <Flex width="100%" justify="space-between" align="flex-end">
                    <StatNumber color="red.600">{metric.value}</StatNumber>
                  </Flex>
                  <StatHelpText fontSize="xs" color="gray.500">{metric.period}</StatHelpText>
                </Stat>
              </VStack>
            ))}
          </Grid>
        </Box>
      </Box>
      
      {/* Service Status Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Service Health
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            {serviceStatus.map((service, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Flex justify="space-between" align="center" mb={3}>
                  <Heading as="h3" size="md" fontWeight="medium">{service.service}</Heading>
                  <Badge colorScheme={service.performance === 100 ? "green" : "yellow"} px={3} py={1} borderRadius="full">
                    {service.status}
                  </Badge>
                </Flex>
                <Flex align="center">
                  <Text width="80px" fontSize="sm">Last Disruption:</Text>
                  <Text fontSize="sm" color="gray.600">{service.lastIncident}</Text>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      
      {/* Regional Status Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Regional System Health
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Latest performance and uptime stats for each area in our global system
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
            {regionStatus.map((region, index) => (
              <Box key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm">
                <HStack mb={3}>
                  <Heading as="h3" size="md" fontWeight="medium">{region.region}</Heading>
                  {region.status === "Running Smoothly" ? (
                    <CheckCircleIcon color="green.500" />
                  ) : (
                    <WarningIcon color="yellow.500" />
                  )}
                </HStack>
                <Flex align="center">
                  <Text width="100px" fontSize="sm">Active Units:</Text>
                  <Text fontSize="sm" fontWeight="medium">{region.activeNodes}</Text>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      
      {/* Recent Incidents Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Latest Disruptions
          </Heading>
          
          <Grid templateColumns={{ base: "1fr" }} gap={8}>
            {recentIncidents.map((incident, index) => (
              <Box key={index} p={8} bg="white" borderRadius="md" boxShadow="sm">
                <Flex justify="space-between" align="center" mb={4} flexWrap="wrap" gap={2}>
                  <HStack>
                    <TimeIcon color="red.600" />
                    <Text fontSize="sm" color="gray.600">{incident.date}</Text>
                  </HStack>
                  <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                    {incident.status}
                  </Badge>
                </Flex>
                <Heading as="h3" size="md" mb={4} fontWeight="medium">{incident.title}</Heading>
                <Text mb={4} color="gray.700">{incident.description}</Text>
                <Flex align="center">
                  <Text fontWeight="medium" fontSize="sm" color="gray.700" mr={2}>Restored at:</Text>
                  <Text fontSize="sm" color="gray.600">{incident.resolution}</Text>
                </Flex>
              </Box>
            ))}
          </Grid>
          
          {/* <Box textAlign="center" mt={10}>
            <Button
              size="md"
              colorScheme="blue"
              variant="outline"
              as="a"
              href="/network/incident-history"
            >
              View Full Incident History
            </Button>
          </Box> */}
        </Box>
      </Box>
      
      {/* Subscription Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium">
            Keep Updated
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto">
            Sign up for live updates to get instant alerts on service interruptions, 
            scheduled maintenance, and issue resolutions
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="red.500"
              color="white"
              _hover={{ bg: "gray.300" }}
              as="a"
              href="/demo-request"
            >
              Schedule a Demo
            </Button>
            
            <Button
              size="lg"
              bg="red.500"
              color="white"
              _hover={{ bg: "gray.300" }}
              as="a"
              href="/contact-sales"
            >
              Reach Sales Team
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Support Resources Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Assistance Options
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" boxShadow="sm" spacing={4}>
              <Image src="https://cdn-icons-png.flaticon.com/512/1932/1932655.png" boxSize="50px" mb={2} />
              <Heading as="h3" size="md" fontWeight="medium">Tech Guides</Heading>
              <Text color="gray.600">Explore guides to understand our system and address technical questions.</Text>
              <Link color="red.600" href="https://apis.roamingproxy.com/redoc" fontWeight="medium">
                API Guides →
              </Link>
            </VStack>
            
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" boxShadow="sm" spacing={4}>
              <Image src="https://cdn-icons-png.flaticon.com/512/1373/1373397.png" boxSize="50px" mb={2} />
              <Heading as="h3" size="md" fontWeight="medium">Proxy Health Dashboard</Heading>
              <Text color="gray.600">
                View live proxy performance and uptime stats on our dedicated health page.
              </Text>
              <Link color="red.600" href="https://console.roamingproxy.com/scraping-tools/search-proxies" fontWeight="medium">
                Check Dashboard →
              </Link>
            </VStack>
            
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" boxShadow="sm" spacing={4}>
              <Image src="https://cdn-icons-png.flaticon.com/512/4677/4677490.png" boxSize="50px" mb={2} />
              <Heading as="h3" size="md" fontWeight="medium">Reach Support</Heading>
              <Text color="gray.600">Our support crew is ready to assist with any challenges you face.</Text>
              <Link color="red.600" href="/resources/support-center" fontWeight="medium">
                Get Help →
              </Link>
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default NetworkStatusPage;
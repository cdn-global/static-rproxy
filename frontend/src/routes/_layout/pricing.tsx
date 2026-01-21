import { Box, Flex, Grid, Heading, Text, VStack, Button, SimpleGrid, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider, Badge, Table, Thead, Tbody, Tr, Th, Td, Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../components/Common/Footer';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const Route = createFileRoute("/_layout/pricing")({
  component: PricingPage,
});

function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlans = [
    {
      name: "Basic",
      description: "Perfect for enthusiasts and modest projects needing smooth data retrieval.",
      monthlyPrice: 49,
      annualPrice: 39,
      monthlyHref: "https://buy.stripe.com/4gwg1C2by9Cs2Ry6op",
      annualHref: "https://buy.stripe.com/3cs8za6rO6qggIobII",
      features: [
        "100,000 API requests monthly",
        "20 concurrent connections",
        "Geo-targeting in US & EU areas",
        "Interactive page processing",
        "Top-tier residential & mobile proxies",
        "Advanced block prevention",
        "Tools for data retrieval & structuring",
      ],
      limitations: [
        "No dedicated account support",
        "No priority messaging assistance",
      ],
    },
    {
      name: "Pro",
      description: "Great for teams aiming to deepen their understanding with consistency.",
      monthlyPrice: 149,
      annualPrice: 119,
      monthlyHref: "https://buy.stripe.com/6oEg1C3fCaGwgIo3cf",
      annualHref: "https://buy.stripe.com/00g5mY8zW2a08bS9AC",
      popular: true,
      features: [
        "1,000,000 API requests monthly",
        "50 concurrent connections",
        "Geo-targeting in US & EU areas",
        "Interactive page processing",
        "Top-tier residential & mobile proxies",
        "Advanced block prevention",
        "Tools for data retrieval & structuring",
      ],
      limitations: [
        "No dedicated account support",
        "No priority messaging assistance",
      ],
    },
    {
      name: "Business",
      description: "Designed for data lovers and companies tackling intricate, large-volume tasks.",
      monthlyPrice: 475,
      annualPrice: 380,
      monthlyHref: "https://buy.stripe.com/eVa02E7vS3e40JqcMQ",
      annualHref: "https://buy.stripe.com/5kA3eQg2o6qgfEk005",
      features: [
        "5,000,000 API requests monthly",
        "200 concurrent connections",
        "Worldwide nation-specific targeting",
        "Interactive page processing",
        "Top-tier residential & mobile proxies",
        "Advanced block prevention",
        "Tools for data retrieval & structuring",
      ],
      limitations: [
        "No dedicated account support",
        "No priority messaging assistance",
      ],
    },
    {
      name: "Corporate",
      description: "Built for pioneers managing vast data networks, with elite assistance.",
      customPricing: true,
      features: [
        "5,000,000+ API requests monthly",
        "200+ concurrent connections",
        "Worldwide nation-specific targeting",
        "Interactive page processing",
        "Top-tier residential & mobile proxies",
        "Advanced block prevention",
        "Tools for data retrieval & structuring",
        "Exclusive account coordinator",
        "Enhanced chat support",
      ],
      limitations: [],
    },
  ];

  const featureComparison = [
    {
      category: "API Functions",
      features: [
        {
          name: "Monthly API requests",
          starter: "100,000",
          analyst: "1,000,000",
          business: "5,000,000",
          enterprise: "5,000,000+",
        },
        {
          name: "Parallel connections",
          starter: "20",
          analyst: "50",
          business: "200",
          enterprise: "200+",
        },
      ],
    },
    {
      category: "Proxy Options",
      features: [
        {
          name: "Geo-specific targeting",
          starter: "US & EU",
          analyst: "US & EU",
          business: "Country-level",
          enterprise: "Country-level",
        },
        {
          name: "Home proxy availability",
          starter: true,
          analyst: true,
          business: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Data Collection Tools",
      features: [
        {
          name: "Live rendering",
          starter: true,
          analyst: true,
          business: true,
          enterprise: true,
        },
        {
          name: "Anti-detection measures",
          starter: true,
          analyst: true,
          business: true,
          enterprise: true,
        },
      ],
    },
  ];

  const faqItems = [
    {
      question: "How are API requests tallied?",
      answer: "Every API request counts toward your monthly limit, including both successful attempts and client-side errors (4xx codes), but not server-side issues (5xx). Unused requests vanish at month’s end.",
    },
    {
      question: "Is it possible to switch plans whenever I want?",
      answer: "Absolutely! Upgrades kick in right away with adjusted billing for the current term. Downgrades take effect at your next billing period to keep service seamless.",
    },
    {
      question: "Are tailored plans available for unique requirements?",
      answer: "Yes, indeed! The Corporate plan can be customized with specific API quotas, dedicated setups, and focused support. Contact our sales crew for a bespoke offer.",
    },
    {
      question: "What occurs if I go over my monthly request cap?",
      answer: "You can continue with flexible rates: $0.005 per additional request for Essential, $0.004 for Advanced, and $0.003 for Professional. Configure notifications or auto-upgrades in your profile to manage usage.",
    },
    {
      question: "How safe is my information?",
      answer: "Protecting your data is paramount. We employ TLS 1.3 for transfers and secure data at rest. With SOC 2 adherence and tight access rules, we only handle your data for fixes with your approval.",
    },
  ];

  return (
    <>
      {/* Pricing Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Plans That Scale With Your Needs
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Whether you’re a beginner or managing enterprise demands, find a package designed to empower your data pursuits.
          </Text>
          <Box maxW="300px" mx="auto" mb={10}>
            <FormControl display="flex" alignItems="center" justifyContent="center">
              <FormLabel htmlFor="billing-toggle" mb="0" mr={2}>
                Month-to-Month
              </FormLabel>
              <Switch
                id="billing-toggle"
                colorScheme="red"
                size="lg"
                isChecked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <FormLabel htmlFor="billing-toggle" mb="0" ml={2}>
                Yearly
                <Badge ml={2} colorScheme="green" fontSize="0.8em">20% Off</Badge>
              </FormLabel>
            </FormControl>
          </Box>
        </Box>
      </Box>

      {/* Pricing Plans Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={8}>
            {pricingPlans.map((plan, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow={plan.popular ? "lg" : "md"}
                bg={plan.popular ? "red.50" : "white"}
                position="relative"
              >
                {plan.popular && (
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    colorScheme="red"
                    variant="solid"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    Best Choice
                  </Badge>
                )}
                <Box p={6}>
                  <Heading as="h3" size="lg" mb={2}>
                    {plan.name}
                  </Heading>
                  <Text color="gray.600" h="60px" mb={4}>
                    {plan.description}
                  </Text>
                  {plan.customPricing ? (
                    <Box my={6}>
                      <Text fontSize="3xl" fontWeight="bold" mb={1}>
                        Custom
                      </Text>
                      <Text color="gray.600">
                        Customized for you
                      </Text>
                    </Box>
                  ) : (
                    <Box my={6}>
                      <Text fontSize="3xl" fontWeight="bold" mb={1}>
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </Text>
                      <Text color="gray.600">
                        monthly {isAnnual && "(charged yearly)"}
                      </Text>
                    </Box>
                  )}
                  <Button
  colorScheme={plan.popular ? "red" : "gray"}
  variant={plan.popular ? "solid" : "outline"}
  size="lg"
  width="full"
  mb={6}
  as="a"
  href={plan.customPricing ? "/contact-sales" : isAnnual ? plan.annualHref : plan.monthlyHref}
>
  {plan.customPricing ? "Contact Sales" : "Choose This Plan"}
</Button>
                  <Divider mb={4} />
                  <Text fontWeight="medium" mb={3}>What’s Included:</Text>
                  <List spacing={2} mb={6}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} display="flex">
                        <ListIcon as={CheckCircleIcon} color="green.500" mt={1} />
                        <Text>{feature}</Text>
                      </ListItem>
                    ))}
                  </List>
                  {plan.limitations.length > 0 && (
                    <>
                      <Text fontWeight="medium" mb={3}>What’s Not Included:</Text>
                      <List spacing={2}>
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <ListItem key={limitationIndex} display="flex" color="gray.600">
                            <ListIcon as={CloseIcon} color="red.500" mt={1} fontSize="xs" />
                            <Text>{limitation}</Text>
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Feature Comparison Table */}
      <Box py={16} bg="gray.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Plan Breakdown
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Explore how our packages align with your data requirements.
          </Text>
          <Box overflowX="auto">
            <Table variant="simple" bg="white" boxShadow="md" borderRadius="md">
              <Thead>
                <Tr bg="gray.100">
                  <Th width="30%">Aspect</Th>
                  <Th width="17.5%">Basic</Th>
                  <Th width="17.5%" bg="red.50">Pro</Th>
                  <Th width="17.5%">Business</Th>
                  <Th width="17.5%">Corporate</Th>
                </Tr>
              </Thead>
              <Tbody>
                {featureComparison.map((category, categoryIndex) => (
                  <>
                    <Tr key={`category-${categoryIndex}`} bg="gray.50">
                      <Td colSpan={5} fontWeight="bold" fontSize="md">
                        {category.category}
                      </Td>
                    </Tr>
                    {category.features.map((feature, featureIndex) => (
                      <Tr key={`feature-${categoryIndex}-${featureIndex}`}>
                        <Td fontWeight="medium">{feature.name}</Td>
                        <Td>
                          {typeof feature.starter === 'boolean'
                            ? (feature.starter ? <CheckCircleIcon color="green.500" /> : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.starter}
                        </Td>
                        <Td bg="red.50">
                          {typeof feature.analyst === 'boolean'
                            ? (feature.analyst ? <CheckCircleIcon color="green.500" /> : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.analyst}
                        </Td>
                        <Td>
                          {typeof feature.business === 'boolean'
                            ? (feature.business ? <CheckCircleIcon color="green.500" /> : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.business}
                        </Td>
                        <Td>
                          {typeof feature.enterprise === 'boolean'
                            ? (feature.enterprise ? <CheckCircleIcon color="green.500" /> : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.enterprise}
                        </Td>
                      </Tr>
                    ))}
                  </>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box py={16} bg="white">
        <Box maxW="900px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Need Answers?
          </Heading>
          <Box borderRadius="md" boxShadow="sm" overflow="hidden">
            <Accordion allowToggle>
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} borderColor="gray.200">
                  <h3>
                    <AccordionButton py={4} px={6} _expanded={{ bg: "red.50", color: "red.600" }}>
                      <Box flex="1" textAlign="left" fontWeight="medium" fontSize="md">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} px={6} bg="gray.50">
                    <Text color="gray.700">{faq.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>
      </Box>

      {/* Usage Statistics Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Data Mastery Hub
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={10} maxW="700px" mx="auto">
            Relied upon by thousands for dependable, adaptable data solutions.
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
            <VStack>
              <Heading as="h3" size="2xl" color="red.600">99.9%</Heading>
              <Text fontWeight="medium">Service Consistency</Text>
              <Text fontSize="sm" color="gray.600">Crafted for business needs</Text>
            </VStack>
            <VStack>
              <Heading as="h3" size="2xl" color="red.600">7B+</Heading>
              <Text fontWeight="medium">Requests Each Month</Text>
              <Text fontSize="sm" color="gray.600">Across our system</Text>
            </VStack>
            <VStack>
              <Heading as="h3" size="2xl" color="red.600">100K</Heading>
              <Text fontWeight="medium">Unique IPs</Text>
              <Text fontSize="sm" color="gray.600">From individuals to enterprises</Text>
            </VStack>
            <VStack>
              <Heading as="h3" size="2xl" color="red.600">190+</Heading>
              <Text fontWeight="medium">Nations Spanned</Text>
              <Text fontSize="sm" color="gray.600">Worldwide coverage</Text>
            </VStack>
          </SimpleGrid>
          <Box mt={16} p={8} bg="white" borderRadius="lg" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <VStack align="flex-start">
                <Heading as="h3" size="md" color="red.600" mb={2}>Robust Protection</Heading>
                <Text>SOC 2 certified, fully secured, and routinely reviewed.</Text>
              </VStack>
              <VStack align="flex-start">
                <Heading as="h3" size="md" color="red.600" mb={2}>Grows With Demand</Heading>
                <Text>Manages high usage effortlessly.</Text>
              </VStack>
              <VStack align="flex-start">
                <Heading as="h3" size="md" color="red.600" mb={2}>Developer-Friendly</Heading>
                <Text>APIs, libraries, and tutorials for quick onboarding.</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Begin Your Data Journey Now
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Select a package or consult sales for a bespoke solution. Try it free for 14 days, no payment upfront.
          </Text>
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "red.700" }}
              as="a"
              href="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
            >
              Try It Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "red.700" }}
              as="a"
              href="/contact"
            >
              Speak With Sales
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default PricingPage;
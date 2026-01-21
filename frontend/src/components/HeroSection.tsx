import { Box, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import PropTypes from 'prop-types';

interface CTA {
  text: string;
  link: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctas?: CTA[];
  bgImage?: string;
}

function HeroSection({ title, subtitle, ctas = [], bgImage = '' }: HeroSectionProps) {
  return (
    <Box
      bgGradient="linear(to-bl, red.900, red.400)"
      py={{ base: 10, md: 15 }}
      bgImage={bgImage}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "rgba(0, 0, 0, 0.4)",
        zIndex: 1,
      }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 6, md: 8 }}
        position="relative"
        zIndex={2}
      >
        <VStack
          align="flex-start"
          spacing={{ base: 4, md: 6 }} // Reduced spacing on mobile
          w={{ base: "100%", md: "50%" }}
          px={{ base: 0, md: 8 }}
        >
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            color="white"
            fontWeight="medium"
            lineHeight="1.2"
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="white"
            fontWeight="normal"
            maxW="600px"
            mb={6}
          >
            {subtitle}
          </Text>
          {/* CTA buttons on mobile */}
          <Flex
            display={{ base: "flex", md: "none" }} // Show only on mobile
            justify="flex-start"
            gap={4}
            flexWrap="wrap"
            w="100%"
          >
            {ctas.map((cta, index) => (
              <Button
                key={cta.link}
                as="a"
                href={cta.link}
                color={index === 0 ? "white" : "red.600"}
                bg={index === 0 ? "red.600" : "white"}
                size="lg"
                _hover={{
                  bg: index === 0 ? "white" : "red.600",
                  color: index === 0 ? "red.600" : "white",
                }}
                px={6}
              >
                {cta.text}
              </Button>
            ))}
          </Flex>
        </VStack>

        <Box
          w={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent={{ base: "center", md: "flex-end" }}
          alignItems="center"
          minH={{ base: "100px", md: "400px" }} // Reduced height on mobile
        >
          {/* Image removed, but space preserved */}
        </Box>
      </Flex>

      {/* CTA buttons on desktop */}
      <Flex
        display={{ base: "none", md: "flex" }} // Show only on desktop
        justify="center"
        gap={4}
        pt={{ base: 6, md: 8 }}
        pb={{ base: 10, md: 20 }}
        position="relative"
        zIndex={2}
        flexWrap="wrap"
      >
        {ctas.map((cta, index) => (
          <Button
            key={cta.link}
            as="a"
            href={cta.link}
            color={index === 0 ? "white" : "red.600"}
            bg={index === 0 ? "red.600" : "white"}
            size="lg"
            _hover={{
              bg: index === 0 ? "white" : "red.600",
              color: index === 0 ? "red.600" : "white",
            }}
            px={6}
          >
            {cta.text}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ctas: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  bgImage: PropTypes.string,
};

export default HeroSection;
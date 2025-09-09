import { createFileRoute } from '@tanstack/react-router';
import {
  Box,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Container,
  Divider,
  Link
} from "@chakra-ui/react";
import Footer from '../../components/Common/Footer';

export const Route = createFileRoute('/_layout/compliance')({
  component: CompliancePage,
});

function CompliancePage() {
  return (
    <Box>
      <Container maxW="1000px" mx="auto" px={4} py={16} color="gray.800">
        <VStack spacing={8} align="start" w="full">
          <Heading as="h1" size="xl" fontWeight="medium">
            Compliance & Regulatory Information
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Last Updated: March 2025
          </Text>

          {/* Introduction */}
          <Box w="full">
            <Text fontSize="lg" mb={4}>
              At Roaming Proxy, we are committed to maintaining the highest standards of regulatory compliance, 
              data protection, and ethical business practices across all our operations. This page details our 
              approach to compliance and outlines the measures we take to ensure we meet or exceed all relevant 
              regulatory requirements.
            </Text>
            <Text fontSize="lg" mb={4}>
              Our compliance framework is designed to protect our users, employees, and stakeholders while 
              upholding our commitment to integrity, transparency, and responsibility. We regularly review 
              and update our compliance programs to adapt to evolving regulatory landscapes and emerging best 
              practices in our industry.
            </Text>
            <Text fontSize="lg">
              This information serves as a comprehensive overview of our compliance initiatives. We encourage 
              all users to familiarize themselves with these measures to understand how we safeguard their 
              interests and maintain the trust they place in our services.
            </Text>
          </Box>

          <Divider />

          {/* 1. Regulatory Compliance */}
          <Box w="full" id="regulatory-compliance">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              1. Regulatory Compliance
            </Heading>
            <Text fontSize="md" mb={4}>
              We adhere to all relevant industry regulations and legal requirements applicable in the jurisdictions 
              where we operate. Our compliance team actively monitors regulatory developments to ensure our 
              practices remain current and fully compliant.
            </Text>
            <Text fontSize="md" mb={4}>
              Key regulatory frameworks we comply with include:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>General Data Protection Regulation (GDPR) for European operations</ListItem>
              <ListItem>California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA)</ListItem>
              <ListItem>Health Insurance Portability and Accountability Act (HIPAA) for health-related data</ListItem>
              <ListItem>Payment Card Industry Data Security Standard (PCI DSS) for payment processing</ListItem>
              <ListItem>Sarbanes-Oxley Act (SOX) for financial reporting</ListItem>
              <ListItem>Federal Trade Commission (FTC) regulations on fair business practices</ListItem>
              <ListItem>Children's Online Privacy Protection Act (COPPA)</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              Our dedicated compliance team conducts quarterly internal audits and engages third-party compliance 
              specialists for annual external reviews to ensure we meet or exceed all regulatory requirements. 
              We maintain detailed documentation of all compliance activities and are prepared to demonstrate 
              our compliance status to regulatory authorities when required.
            </Text>
          </Box>

          {/* 2. Data Protection & Privacy */}
          <Box w="full" id="data-protection-privacy">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              2. Data Protection & Privacy
            </Heading>
            <Text fontSize="md" mb={4}>
              We retain analytics data for up to 2 years (per Google Analytics cookies), billing information for 7 years per tax laws, 
              and user credentials until account deletion unless legally required otherwise.
            </Text>
            <Text fontSize="md" mb={4}>
              We implement robust security measures to protect user data, ensuring compliance with GDPR, CCPA, 
              and other privacy laws. Our privacy policies detail how we collect, store, and use personal information, 
              and we are committed to transparency in our data handling practices.
            </Text>
            <Text fontSize="md" mb={4}>
              Our data protection framework includes:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>End-to-end encryption for sensitive data in transit and at rest</ListItem>
              <ListItem>Strict access controls with principle of least privilege</ListItem>
              <ListItem>Regular privacy impact assessments (PIAs) for all new products and features</ListItem>
              <ListItem>Comprehensive data retention and deletion policies</ListItem>
              <ListItem>Data Processing Agreements (DPAs) with all vendors and service providers</ListItem>
              <ListItem>Automated data classification systems to ensure appropriate handling</ListItem>
              <ListItem>Regular training for all staff on data protection best practices</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              We employ a dedicated Data Protection Officer (DPO) who oversees all privacy-related matters 
              and ensures compliance with data protection regulations worldwide. Our users have full control 
              over their personal data and can exercise their rights to access, correct, or delete their 
              information at any time through our platform.
            </Text>
          </Box>

          {/* 3. Security Standards */}
          <Box w="full" id="security-standards">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              3. Security Standards
            </Heading>
            <Text fontSize="md" mb={4}>
              Our systems comply with industry security standards, ensuring that user data remains protected 
              from unauthorized access, breaches, or leaks. We maintain a comprehensive security program that 
              is regularly assessed and updated to address emerging threats.
            </Text>
            <Text fontSize="md" mb={4}>
              Security certifications and standards we maintain include:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>ISO 27001 Information Security Management</ListItem>
              <ListItem>SOC 2 Type II Compliance</ListItem>
              <ListItem>NIST Cybersecurity Framework</ListItem>
              <ListItem>Cloud Security Alliance (CSA) STAR Certification</ListItem>
              <ListItem>OWASP Top 10 security controls implementation</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              Our security measures include:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>24/7 security monitoring and incident response capabilities</ListItem>
              <ListItem>Multi-layered firewall architecture and intrusion detection systems</ListItem>
              <ListItem>Regular penetration testing and vulnerability assessments</ListItem>
              <ListItem>Formal vulnerability management program</ListItem>
              <ListItem>Multi-factor authentication for all critical systems</ListItem>
              <ListItem>Employee security awareness training and phishing simulations</ListItem>
              <ListItem>Physical security controls for all facilities</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              We conduct annual security audits and maintain a security incident response plan that is 
              regularly tested through tabletop exercises. All security incidents are thoroughly investigated, 
              and appropriate mitigation measures are implemented to prevent recurrence.
            </Text>
          </Box>

          {/* 4. Compliance with Financial Regulations */}
          <Box w="full" id="financial-compliance">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              4. Compliance with Financial Regulations
            </Heading>
            <Text fontSize="md" mb={4}>
              We follow all relevant financial compliance laws, including Anti-Money Laundering (AML) and 
              Know Your Customer (KYC) regulations, ensuring legal financial transactions. Our financial 
              operations adhere to strict controls and oversight mechanisms.
            </Text>
            <Text fontSize="md" mb={4}>
              Our financial compliance includes:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>Anti-Money Laundering (AML) protocols and monitoring systems</ListItem>
              <ListItem>Know Your Customer (KYC) verification procedures</ListItem>
              <ListItem>Counter-Terrorism Financing (CTF) screening</ListItem>
              <ListItem>Foreign Account Tax Compliance Act (FATCA) reporting where applicable</ListItem>
              <ListItem>Compliance with local tax regulations across all operating jurisdictions</ListItem>
              <ListItem>Regular financial audits by independent accounting firms</ListItem>
              <ListItem>Transaction monitoring for suspicious activities</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              Our financial compliance team works closely with regulators and financial institutions to 
              ensure our processes meet all current requirements and adapt to regulatory changes. We maintain 
              detailed records of all financial transactions and are prepared to provide necessary information 
              to regulatory authorities when required.
            </Text>
          </Box>

          {/* 5. Ethical Business Practices */}
          <Box w="full" id="ethical-business">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              5. Ethical Business Practices
            </Heading>
            <Text fontSize="md" mb={4}>
              Our organization follows ethical business practices, including transparency, fair trade, and 
              anti-corruption policies, to promote integrity and fairness. We are committed to conducting 
              business with the highest ethical standards in all our operations and relationships.
            </Text>
            <Text fontSize="md" mb={4}>
              Our ethical framework includes:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>Comprehensive Code of Ethics and Business Conduct for all employees</ListItem>
              <ListItem>Anti-bribery and anti-corruption policies that exceed legal requirements</ListItem>
              <ListItem>Conflict of interest disclosure and management procedures</ListItem>
              <ListItem>Fair competition and antitrust compliance</ListItem>
              <ListItem>Ethical sourcing and supplier management standards</ListItem>
              <ListItem>Whistleblower protection program with anonymous reporting channels</ListItem>
              <ListItem>Regular ethics training for all employees</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              All employees receive annual ethics training, and our Ethics Committee meets quarterly to review 
              potential issues and ensure our practices remain aligned with our values. We encourage a culture 
              of ethical behavior and provide mechanisms for reporting concerns without fear of retaliation.
            </Text>
          </Box>

          {/* 6. Accessibility Compliance */}
          <Box w="full" id="accessibility-compliance">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              6. Accessibility Compliance
            </Heading>
            <Text fontSize="md" mb={4}>
              We are committed to making our services accessible, following Web Content Accessibility Guidelines 
              (WCAG) to ensure inclusivity for users with disabilities. We believe that digital products and 
              services should be accessible to everyone, regardless of their abilities.
            </Text>
            <Text fontSize="md" mb={4}>
              Our accessibility initiatives include:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>Compliance with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</ListItem>
              <ListItem>Regular automated and manual accessibility testing</ListItem>
              <ListItem>Accessibility-focused user research and feedback collection</ListItem>
              <ListItem>Accessible design and development guidelines for all products</ListItem>
              <ListItem>Employee training on creating accessible content and services</ListItem>
              <ListItem>Alternative formats for content when requested</ListItem>
              <ListItem>Ongoing monitoring and improvement of accessibility features</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              Our Accessibility Task Force meets monthly to review progress, address issues, and implement 
              improvements to our accessibility practices. We welcome feedback from users regarding the 
              accessibility of our services and are committed to continuous improvement in this area.
            </Text>
          </Box>

          {/* 7. Environmental Compliance */}
          <Box w="full" id="environmental-compliance">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              7. Environmental Compliance
            </Heading>
            <Text fontSize="md" mb={4}>
              We adhere to environmental regulations and sustainable business practices, reducing our carbon 
              footprint and promoting eco-friendly policies. We recognize our responsibility to minimize our 
              environmental impact and contribute to global sustainability efforts.
            </Text>
            <Text fontSize="md" mb={4}>
              Our environmental initiatives include:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>Annual carbon footprint assessment and reduction targets</ListItem>
              <ListItem>Use of renewable energy for our data centers and offices where available</ListItem>
              <ListItem>Electronic waste management and recycling programs</ListItem>
              <ListItem>Sustainable procurement policies for all vendors and suppliers</ListItem>
              <ListItem>Employee green initiatives and sustainability training</ListItem>
              <ListItem>Water conservation and waste reduction practices</ListItem>
              <ListItem>Regular reporting on environmental performance and progress</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              We publish an annual Environmental Impact Report detailing our sustainability efforts and progress 
              toward our environmental goals. We continuously seek innovative ways to reduce our environmental 
              footprint and promote sustainable practices throughout our operations.
            </Text>
          </Box>

          {/* 8. Consumer Protection */}
          <Box w="full" id="consumer-protection">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              8. Consumer Protection
            </Heading>
            <Text fontSize="md" mb={4}>
              Our policies ensure consumer rights protection, including clear terms of service, fair pricing, 
              and robust dispute resolution mechanisms. We are committed to treating our users fairly and 
              transparently in all aspects of our business relationship.
            </Text>
            <Text fontSize="md" mb={4}>
              Our consumer protection measures include:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>Clear and fair Terms of Service written in plain language</ListItem>
              <ListItem>Transparent pricing with no hidden fees or charges</ListItem>
              <ListItem>Fair marketing practices that avoid misleading claims</ListItem>
              <ListItem>Comprehensive warranty and return policies</ListItem>
              <ListItem>Multi-channel customer support with trained representatives</ListItem>
              <ListItem>Independent dispute resolution process with qualified mediators</ListItem>
              <ListItem>Regular customer satisfaction surveys and feedback mechanisms</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              We regularly review consumer feedback and complaints to identify areas for improvement and ensure 
              our practices align with customer expectations. Our consumer protection policies are designed to 
              build trust and foster long-term relationships with our users.
            </Text>
          </Box>

          {/* 9. Intellectual Property Compliance */}
          <Box w="full" id="intellectual-property">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              9. Intellectual Property Compliance
            </Heading>
            <Text fontSize="md" mb={4}>
              We respect intellectual property rights, ensuring that all content, software, and trademarks used 
              are legally acquired and used appropriately. We recognize the importance of protecting creative 
              works and innovations through proper intellectual property management.
            </Text>
            <Text fontSize="md" mb={4}>
              Our IP compliance practices include:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>Comprehensive IP rights clearance process for all content</ListItem>
              <ListItem>Software license management and auditing</ListItem>
              <ListItem>Trademark registration and monitoring</ListItem>
              <ListItem>Content review procedures to prevent IP infringement</ListItem>
              <ListItem>Employee training on intellectual property rights</ListItem>
              <ListItem>DMCA compliance and takedown procedures</ListItem>
              <ListItem>Regular IP audit and compliance reviews</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              Our legal team works closely with product teams to ensure all intellectual property matters are 
              properly addressed throughout our operations. We respect the intellectual property of others and 
              expect the same respect for our own intellectual property assets.
            </Text>
          </Box>

          {/* 10. Employee & Workplace Compliance */}
          <Box w="full" id="workplace-compliance">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              10. Employee & Workplace Compliance
            </Heading>
            <Text fontSize="md" mb={4}>
              Our workplace policies comply with labor laws, ensuring fair wages, workplace safety, and equal 
              opportunity employment. We are committed to creating a safe, inclusive, and respectful work 
              environment for all our employees.
            </Text>
            <Text fontSize="md" mb={4}>
              Our workplace compliance includes:
            </Text>
            <UnorderedList pl={6} spacing={2} mb={4}>
              <ListItem>Equal Employment Opportunity (EEO) policies and practices</ListItem>
              <ListItem>Comprehensive health and safety protocols</ListItem>
              <ListItem>Fair labor standards for wages, hours, and benefits</ListItem>
              <ListItem>Anti-harassment and anti-discrimination training</ListItem>
              <ListItem>Family and Medical Leave Act (FMLA) compliance</ListItem>
              <ListItem>Americans with Disabilities Act (ADA) accommodations</ListItem>
              <ListItem>Regular workplace safety inspections and training</ListItem>
              <ListItem>Diversity, equity, and inclusion initiatives</ListItem>
            </UnorderedList>
            <Text fontSize="md" mb={4}>
              Our Human Resources department conducts regular policy reviews and provides guidance to ensure 
              compliance with changing workplace regulations across all jurisdictions. We foster a culture of 
              respect, inclusion, and professional growth, where all employees can thrive and contribute to 
              our shared success.
            </Text>
          </Box>

          {/* 11. Contact Information */}
          <Box w="full" id="contact-information">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              11. Contact Information
            </Heading>
            <Text fontSize="md" mb={4}>
              If you have any questions about our compliance policies, or if you need to report a compliance 
              concern, please reach out to us at:
            </Text>
            <VStack align="start" spacing={2} pl={4}>
              <Text><strong>Compliance Email:</strong> compliance@roamingproxy.com</Text>
              <Text><strong>Address:</strong> 8 The Green, Dover, Kent County, DE 19901 US</Text>
              <Text><strong>Phone:</strong> +1 ‪(833) 435-3873‬</Text>
              <Text><strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM EST</Text>
            </VStack>
            <Text fontSize="md" mt={4}>
              For whistleblower reports or confidential compliance concerns, please use our anonymous reporting 
              channel at <Link color="red.500" href="https://roamingproxy.com/report">roamingproxy.com/report</Link>.
            </Text>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default CompliancePage;
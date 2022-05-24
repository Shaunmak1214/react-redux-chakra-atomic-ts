import React from 'react';
import {
  Center,
  Container,
  Text,
  SimpleGrid,
  Box,
  Heading,
} from '@chakra-ui/react';
import { FooterLink, FooterHeader } from '../atoms';

interface Props {
  marginTop: boolean;
}
const Footer = ({ marginTop }: Props) => {
  return (
    <>
      <Center
        borderTop="1px solid #DEDEDE"
        borderBottom="1px solid #DEDEDE"
        mb="25px"
        mt={marginTop ? '25px' : 0}
        id="footer"
      >
        <Container maxW="container.xl" py="5em">
          <SimpleGrid
            columns={[1, 1, 4]}
            spacing="15px"
            alignItems={'center'}
            justifyItems={'center'}
          >
            <Box>
              <Heading fontSize={'1.9rem'}>Rodeo.my</Heading>
              <Text py="20px">This is the admin dashboard for rodeo.my</Text>
            </Box>
            <Box>
              <FooterHeader>QUICK LINKS</FooterHeader>
              <FooterLink link="#" text="Home" />
              <FooterLink link="#" text="About Us" />
              <FooterLink link="#" text="FAQ" />
              <FooterLink link="#" text="Terms & Conditions" />
              <FooterLink link="#" text="Privacy Policy" />
            </Box>
            <Box>
              <FooterHeader>COMMUNITY</FooterHeader>
              <FooterLink link="#" text="Join discord" />
              <FooterLink link="#" text="Facebook" />
              <FooterLink link="#" text="Instagram" />
              <FooterLink link="#" text="Help Centre" />
              <FooterLink link="#" text="How it works" />
            </Box>
            <Box>
              <FooterHeader>CONTACT US</FooterHeader>
              <FooterLink link="#" text="Email: support@domain.com" />
              <FooterLink link="#" text="1 (00) 832 2342" />
            </Box>
          </SimpleGrid>
        </Container>
      </Center>
      <Center pb="20px">
        <Text>2021 © Company Name. All rights reserved. </Text>
      </Center>
    </>
  );
};

export default Footer;

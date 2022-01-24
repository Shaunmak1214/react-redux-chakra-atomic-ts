import React, { useEffect, useRef, useCallback } from 'react';
import {
  Center,
  HStack,
  Container,
  Box,
  Text,
  Link,
  Heading,
} from '@chakra-ui/react';

const Header = () => {
  const headerSticky = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback((e) => {
    const window = e.currentTarget;
    if (window.scrollY > 10) {
      stickyToggle(true);
    } else {
      stickyToggle(false);
    }
  }, []);

  const stickyToggle = (status: boolean) => {
    if (headerSticky.current) {
      if (status) {
        headerSticky.current!.style!.background = '#FFFFFF';
        headerSticky.current!.style!.boxShadow = ' 0 1px 2px 0 rgba(0,0,0,.1)';
      } else {
        headerSticky.current!.style!.background = 'transparent';
        headerSticky.current!.style!.boxShadow = 'none';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', (e: any) => handleScroll(e));
    return () => {
      window.removeEventListener('scroll', (e: any) => handleScroll(e));
    };
  }, [handleScroll]);

  return (
    <Center
      bgColor="transparent"
      w="100%"
      zIndex="150"
      position="fixed"
      transition="150ms cubic-bezier(0.215,0.61,0.355,1);"
      py="18px"
      alignItems="center"
      justifyContent="center"
      id="header"
      ref={headerSticky}
    >
      <Container maxW="95%">
        <HStack justifyContent={'space-between'} alignItems="center">
          <Box onClick={() => (window.location.href = '/')} cursor="pointer">
            <Heading fontSize="1.2rem" fontWeight={'bold'}>
              Company Name
            </Heading>
          </Box>
          <Box w="50%">
            <HStack justifyContent={'space-between'}>
              <Link href="#">
                <Text>About</Text>
              </Link>
              <Link href="#">
                <Text>Raodmap</Text>
              </Link>
              <Link href="#">
                <Text>Why Us</Text>
              </Link>
              <Box borderRight="2px solid #000000" h="20px"></Box>
              <Link href="#">
                <Text>Sign Up</Text>
              </Link>
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Center>
  );
};

export default Header;

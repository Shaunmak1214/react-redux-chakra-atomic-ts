// @ts-nocheck
import { Center, Container, Heading, HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { BTCLogo, GithubIcon } from '../assets';
import { Spacer, PrimaryButton, SecondaryButton } from '../components/atoms';

const Home = () => {
  const [githubButtomIsHovered, setGithubButtomIsHovered] = useState(false);
  const [bitcoinLogoIsHovered, setBitcoinLogoIsHovered] = useState(false);

  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get Header
    const header = document.getElementById('header');
    // Header Height
    const headerHeight = header!.offsetHeight;
    splashRef.current!.style.paddingTop = `${headerHeight}px`;
  });

  return (
    <Center w="100%" h="100%" ref={splashRef}>
      <Container maxW={'container.xl'} py="100px">
        <Heading>
          Welcome to <span id="gradientText">React Redux Chakra Atomic TS</span>
        </Heading>
        <Text>The best boilerplate out there</Text>
        <Spacer size="xs" />
        <HStack>
          <PrimaryButton
            d="flex"
            alignItems="center"
            onMouseEnter={() => {
              setGithubButtomIsHovered(true);
            }}
            onMouseLeave={() => {
              setGithubButtomIsHovered(false);
            }}
            onClick={() => {
              window.open(
                'https://github.com/Shaunmak1214/react-redux-chakra-atomic-ts',
              );
            }}
          >
            <HStack spacing={3}>
              <Text>View Github Project</Text>
              <GithubIcon
                style={{
                  height: '22px',
                  width: '22px',
                  fill: githubButtomIsHovered ? '#FFFFFF' : '#000000',
                }}
              />
            </HStack>
          </PrimaryButton>
          <SecondaryButton
            onMouseEnter={() => {
              setBitcoinLogoIsHovered(true);
            }}
            onMouseLeave={() => {
              setBitcoinLogoIsHovered(false);
            }}
            onClick={() => {
              window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            }}
          >
            <HStack spacing={3}>
              <Text>Get Free Bitcoin</Text>
              <BTCLogo
                style={{
                  height: '22px',
                  width: '22px',
                  transform: bitcoinLogoIsHovered
                    ? 'rotate(-15deg)'
                    : 'rotate(50deg)',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </HStack>
          </SecondaryButton>
        </HStack>
      </Container>
    </Center>
  );
};

export default Home;

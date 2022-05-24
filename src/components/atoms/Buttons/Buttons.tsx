import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Image, Box } from '@chakra-ui/react';
import { GoogleIcon } from '../../../assets';

const PrimaryButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;
  return (
    <Button
      color="#0148FA"
      border="2px solid #0148FA"
      bg="transparent"
      borderRadius="3px"
      px="10"
      py="20px"
      _hover={{
        bg: '#B1C7FF',
        color: '#0148FA',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

const SecondaryButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;
  return (
    <Button
      border="2px solid #FFFFFF"
      px="10"
      py="20px"
      variant="ghost"
      {...props}
    >
      {children}
    </Button>
  );
};

const GoogleLoginButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;
  return (
    <Button
      color="#0F1A05"
      border="1px solid #0F1A05"
      bg="transparent"
      borderRadius="10px"
      px="10"
      py="20px"
      _hover={{
        bg: '#F5F5F5',
      }}
      position={'relative'}
      {...props}
    >
      <Box position={'absolute'} left={'25px'}>
        {' '}
        <Image src={GoogleIcon} />
      </Box>
      <Text>{children}</Text>
    </Button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

GoogleLoginButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PrimaryButton, SecondaryButton, GoogleLoginButton };

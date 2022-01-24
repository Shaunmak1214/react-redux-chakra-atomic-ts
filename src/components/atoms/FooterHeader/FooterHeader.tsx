import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
interface Props {
  children: any;
}
const FooterHeader = ({ ...props }: Props) => {
  const children = props.children;
  return (
    <Text fontWeight={'bold'} fontSize={'1.2rem'} py="10px">
      {children}
    </Text>
  );
};

FooterHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterHeader;

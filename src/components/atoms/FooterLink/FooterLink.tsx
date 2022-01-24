import React from 'react';
import { Link, Text, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
interface Props {
  text: string;
  link: string;
}
const FooterLink = ({ link, text, ...props }: Props) => {
  return (
    <Box w="fit-content">
      {' '}
      <Link href={link}>
        <Text py="10px" fontWeight={'bold'} {...props}>
          {text}
        </Text>
      </Link>
    </Box>
  );
};
FooterLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default FooterLink;

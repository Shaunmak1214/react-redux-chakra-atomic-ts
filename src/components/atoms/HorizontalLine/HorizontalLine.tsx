import React from 'react';
import PropTypes from 'prop-types';
interface Props {
  color: string;
  width: string;
  height: string;
}
const HorizontalLine = ({ color, width, height }: Props) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: height,
        width: width,
        margin: '10px 0',
      }}
    />
  );
};

HorizontalLine.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default HorizontalLine;

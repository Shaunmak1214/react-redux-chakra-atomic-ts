import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  initialState: boolean;
}

const useCHModal = ({ initialState }: Props) => {
  const [isOpen, setIsOpen] = React.useState(initialState);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return { isOpen, handleModalOpen, handleModalClose };
};

useCHModal.propTypes = {
  initialState: PropTypes.bool,
};

export default useCHModal;

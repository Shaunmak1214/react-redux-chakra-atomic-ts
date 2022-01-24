import React from 'react';
import { getIn } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { formField as Props } from '../../../types/fieldTypes';
const CHTextArea = ({ field, form, label, customLabel, ...props }: Props) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormControl w="100%" id="email" isInvalid={errorText ? true : false}>
      <FormLabel>{customLabel || label}</FormLabel>
      <Textarea resize={'none'} size="md" {...field} {...props} />
      <FormErrorMessage fontFamily="Source Sans Pro" fontSize="sm">
        {errorText}
      </FormErrorMessage>
    </FormControl>
  );
};
CHTextArea.propTypes = {
  field: PropTypes.any,
  form: PropTypes.any,
  props: PropTypes.any,
  label: PropTypes.string,
};

export default React.memo(CHTextArea);

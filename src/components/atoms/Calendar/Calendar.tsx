import React from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import ReactDatePicker from 'react-datepicker';
import { getIn } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import '../../../assets/css/date-picker.css';
const CHCalendar = ({
  form,
  field,
  label,
  selectedDate,
  isClearable = false,
  showPopperArrow = false,
  customLabel,
  formInputName,
  ...props
}: any) => {
  const errorText: string =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  const onChange = (date: Date | [Date | null, Date | null] | null) => {
    //@ts-ignore
    console.log(Date.parse(date));
    form.setFieldValue(formInputName, date);
  };
  return (
    <VStack w="100%">
      <FormControl w="100%" isInvalid={errorText ? true : false}>
        <FormLabel>{customLabel || label}</FormLabel>
        <ReactDatePicker
          selected={selectedDate}
          onChange={onChange}
          isClearable={isClearable}
          showMonthDropdown
          showYearDropdown
          dateFormat="dd/MM/yyyy"
          dropdownMode="select"
          showPopperArrow={showPopperArrow}
          {...props}
        />
        <FormErrorMessage fontSize="sm">{errorText}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

export default React.memo(CHCalendar);

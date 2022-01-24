import React, { useState } from 'react';
import 'react-dates/initialize';
import {
  DayPickerSingleDateController,
  isInclusivelyAfterDay,
} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';
const CHDatePicker = ({
  form: { setFieldValue, values },
  setDateString,
  ...props
}: any) => {
  const [focusedInput, setFocusedInput] = useState<any>();
  const handleDatesChange = (date: any) => {
    setDateString(date.format('DD/MM/YYYY'));
    setFieldValue('appointment_date', date);
  };

  return (
    <DayPickerSingleDateController
      date={values['appointment_date']}
      onDateChange={(date: any) => handleDatesChange(date)}
      focused={focusedInput}
      onFocusChange={({ focused }: any) => setFocusedInput(focused)}
      id="appointment_date"
      isOutsideRange={(day) => !isInclusivelyAfterDay(day, moment())}
      isDayBlocked={(momentDate) =>
        momentDate.format('ddd') === 'Sat' || momentDate.format('ddd') === 'Sun'
      }
      hideKeyboardShortcutsPanel
      {...props}
    />
  );
};

export default React.memo(CHDatePicker);

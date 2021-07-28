import DatePicker from 'react-date-picker';
import styles from '../DiaryDateСalendar/DiaryDateСalendar.module.css';
import CalendarIcon from '../DiaryDateСalendar/CalendarIcon.jsx';
// import {useState} from "react-redux";
import React, { useState } from 'react';
import '../DiaryDateСalendar/calendarCustonStyles.css';

import '../../index.css';
// const dateValue = Date.now()
// const maxDate = new Date();

// console.log(useState);
const DiaryDateСalendar = function() {
  const [value, onChange] = useState(new Date());
  const date = value.toLocaleDateString().split('.').reverse().join('-');
  console.log(date);
  return (
    <>
      <DatePicker
        className={styles.calendar}
        value={value}
        format='dd.MM.yyyy'
        onChange={onChange}
        clearIcon={null}
        calendarIcon={<CalendarIcon />}
        maxDate = {new Date()}

      />
    </>
  );
};
export default DiaryDateСalendar;

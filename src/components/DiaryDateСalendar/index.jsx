/* eslint-disable require-jsdoc */
import DatePicker from 'react-date-picker';
import styles from '../DiaryDateСalendar/DiaryDateСalendar.module.css';
import CalendarIcon from '../DiaryDateСalendar/CalendarIcon.jsx';
import React, { useState, useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import { diaryOperations } from '../../redux/diary';


import '../DiaryDateСalendar/calendarCustomStyles.css';
import '../../index.css';

export default function DiaryDateСalendar() {
  const [value, onChange] = useState(new Date());
  
  // const [date, setDate] = useState(new Date().toLocaleDateString().split('.').reverse().join('-'));
    const dispatch = useDispatch();


  // const changeDate = () => {
  //   setDate(value.toLocaleDateString().split('.').reverse().join('-'));
  // };
  // useEffect(() => {
  //   changeDate();
  // }, [value]);


  useEffect(() => {
    dispatch(diaryOperations.fetchHistory({ value}));
  }, [value]);

  return (
    <>
      <DatePicker
        className={styles.calendar}
        value={value}
        format="dd.MM.yyyy"
        onChange={onChange}
        clearIcon={null}
        calendarIcon={<CalendarIcon />}
        maxDate={new Date()}
      />
    </>
  );
}

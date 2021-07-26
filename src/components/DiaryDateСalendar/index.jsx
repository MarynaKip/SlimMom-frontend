import DatePicker from 'react-date-picker';
import styles from '../DiaryDateСalendar/DiaryDateСalendar.module.css'
import CalendarIcon from '../DiaryDateСalendar/CalendarIcon.jsx';
// import {useState} from "react-redux";
import React, { useState } from 'react';



import '../../index.css';
// const dateValue = Date.now()

console.log(useState)
export default function DiaryDateСalendar() {


const [value, onChange] = useState (new Date());


  return (
  <>
  <DatePicker
  className = {styles.calendar}
   value={ value}
   format = "dd.MM.yyyy"
   onChange = {onChange}
   clearIcon = {null}
   calendarIcon = {<CalendarIcon/>}
/>
  </>);
};


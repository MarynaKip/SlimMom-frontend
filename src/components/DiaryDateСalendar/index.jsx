import DatePicker from 'react-date-picker';
import styles from '../DiaryDateСalendar/DiaryDateСalendar.module.css'
import CalendarIcon from '../DiaryDateСalendar/CalendarIcon.jsx'
import '../../index.css';

const dateValue = Date.now()
const DiaryDateСalendar = () => {
  return (
  <>
  <DatePicker
  className = {styles.calendar}
   value={dateValue}
   format = "dd.MM.yyyy"
   onChange = {null}
   clearIcon = {null}
   calendarIcon = {<CalendarIcon/>}
/>
  </>)
};

export default DiaryDateСalendar;

import {useState} from 'react';
import {Form, Formik} from 'formik';
// import * as Yup from 'yup';
import styles from './DailyCaloriesForm.module.css';

const initialValues = {
  height: '', // рост
  age: '', // возвраст
  currentWeight: '', // текущий вес
  desiredWeight: '', // желаемый вес
  bloodType: '', // группа крови
};

const DailyCaloriesForm = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState('');

  const modalHandler = (values) => {
    initialValues=values,
    setData('');
    setShow(true);
  };
  return (
    <>
      <h1 className ={styles.dailyForm_title}>
          Просчитай свою суточную <br/> норму калорий</h1>
      <Formik
        initialValues={{initialValues}}
        // validationSchema={Yup.object({
        //   height: Yup.string()
        //       .positive().integer()
        //       .required('Required'),
        //   age: Yup.string()
        //       .positive().integer()
        //       .required('Required'),
        //   bloodType: Yup.boolean()
        //       .required('Required')
        //       .oneOf([true], 'You must accept the terms and conditions.'),
        // })}
        onSubmit = {modalHandler}
      >
        <Form className={styles.dailyForm}>
          <div className=" ">
            <label htmlFor="height"
              className = {styles.dailyLabel}>Рост * </label>
            <input
              id="height"
              name="height"
              type="number"
              className ={styles.daily_input}
            />
            <label htmlFor="age"
              className = {styles.dailyLabel}>Возраст * </label>
            <input
              id="age"
              name="age"
              type="number"
              className ={styles.daily_input}
            />
            <label htmlFor="currentWeight" className = {styles.dailyLabel}>
          Текущий вес * </label>
            <input
              id="currentWeight"
              name="currentWeight"
              type="number"
              className ={styles.daily_input}
            />
            <label htmlFor="desiredWeight" className = {styles.dailyLabel}>
          Желаемый вес * </label>
            <input
              id="desiredWeight"
              name="desiredWeight"
              type="number"
              className ={styles.daily_input}
            />
            <label className = {styles.dailyLabel}>
              <span>Группа крови * </span>
              <br/>
              <input
                id = "bloodType"
                name="bloodType"
                type="radio"
                value="1"
                checked ={'bloodType' === '1'}
              />
              <span>1</span>
              <input
                id = "bloodType"
                name="bloodType"
                type="radio"
                value="2"
              />
              <span>2</span>
              <input
                id = "bloodType"
                name="bloodType"
                type="radio"
                value="3"
                checked={'bloodType' === '3'}
              />
              <span>3</span>
              <input
                id = "bloodType"
                name="bloodType"
                type="radio"
                value="4"
                checked={'bloodType' === '4'}
              />
              <span>4</span>
            </label>
            <div>
              {show}
              <button type="submit" className = {styles.dailyButton}
                onSubmit = {modalHandler}
                tittle = {data}>
                Похудеть
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};


export default DailyCaloriesForm;

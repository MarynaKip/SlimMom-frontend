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
    console.log(values);
    setData(2+10/5+100);
    setShow(true);
  };
  return (
    <>
      <h1 className ={styles.dailyForm_title}>
          Просчитай свою суточную <br/> норму калорий</h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={Yup.object({
        //   height: Yup.string()
        //       .max(2)
        //       .required('Required'),
        //   age: Yup.string()
        //       .max(2)
        //       .required('Required'),
        //   // bloodType: Yup.boolean()
        //   //     .required('Required')
        //   //     .oneOf([true], 'You must accept the terms and conditions.'),
        // })}
        onSubmit = {modalHandler}
      >
        {({values, handleChange}) => <Form className={styles.dailyForm}>
          <div className=" ">
            <label htmlFor="height"
              className = {styles.dailyLabel}>Рост * </label>
            <input
              value={values.height}
              onChange = {handleChange}
              id="height"
              name="height"
              type="number"
              className ={styles.daily_input}
            />
            <label htmlFor="age"
              className = {styles.dailyLabel}>Возраст * </label>
            <input
              value={values.age}
              onChange = {handleChange}
              id="age"
              name="age"
              type="number"
              className ={styles.daily_input}
            />
            <label htmlFor="currentWeight" className = {styles.dailyLabel}>
          Текущий вес * </label>
            <input
              value={values.currentWeight}
              onChange = {handleChange}
              id="currentWeight"
              name="currentWeight"
              type="number"
              className ={styles.daily_input}
            />
            <label htmlFor="desiredWeight" className = {styles.dailyLabel}>
          Желаемый вес * </label>
            <input
              value={values.desiredWeight}
              onChange = {handleChange}
              id="desiredWeight"
              name="desiredWeight"
              type="number"
              className ={styles.daily_input}
            />
            <label className = {styles.dailyLabel}>
              <span>Группа крови * </span>
              <br/>
              <input
                value={values.bloodType}
                onChange = {handleChange}
                id = "bloodType"
                name="bloodType"
                type="radio"
                checked ={'bloodType' === '1'}
              />
              <span>1</span>
              <input
                value={values.bloodType}
                onChange = {handleChange}
                id = "bloodType"
                name="bloodType"
                type="radio"
              />
              <span>2</span>
              <input
                value={values.bloodType}
                onChange = {handleChange}
                id = "bloodType"
                name="bloodType"
                type="radio"
                checked={'bloodType' === '3'}
              />
              <span>3</span>
              <input
                value={values.bloodType}
                onChange = {handleChange}
                id = "bloodType"
                name="bloodType"
                type="radio"
                checked={'bloodType' === '4'}
              />
              <span>4</span>
            </label>
            <div>
              <button type="submit" className = {styles.dailyButton}>
                Похудеть
              </button>
              {show &&
              <button type="submit" className = {styles.dailyButton}
              >
                Похудеть-{data}
              </button>}
            </div>
          </div>
        </Form>}
      </Formik>
    </>
  );
};


export default DailyCaloriesForm;

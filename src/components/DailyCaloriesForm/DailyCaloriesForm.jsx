import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './DailyCaloriesForm.module.css';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import { getModalIsOpen } from '../../redux/modal/modal-selector';
import modalOperations from '../../redux/modal/modal-operations';
import calculatorOperations from '../../redux/calculator/calculator-operations';

const SignupSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, 'Введите правилные данные')
    .typeError('Рост должен быть числом')
    .positive()
    .integer('Введите число')
    .max(224, 'Введите правилные данные')
    .required('Заполните все поля'),
  age: Yup.number()
    .positive()
    .typeError('Возраст должен быть числом')
    .integer()
    .min(16, 'Введите правилные данные')
    .max(110, 'Введите правилные данные')
    .required('Заполните все поля'),
  currentWeight: Yup.number()
    .typeError('Вес должен быть числом')
    .positive()
    .integer()
    .min(40, 'Введите правилные данные')
    .max(350, 'Введите правилные данные')
    .required('Заполните все поля'),
  desiredWeight: Yup.number()
    .typeError('Желаемый вес должен быть числом')
    .positive()
    .integer()
    .min(40, 'Введите правилные данные')
    .max(300, 'Введите правилные данные')
    .required('Заполните все поля'),
});

// const initialValues = {
//     height: '', // рост
//     age: '', // возвраст
//     currentWeight: '', // текущий вес
//     desiredWeight: '', // желаемый вес
//     bloodType: '', // группа крови
// };

const DailyCaloriesForm = ({ isModalOpen, modalOpen, sendRequestDaily }) => {
  return (
    <div>
      <h1 className={styles.dailyForm_title}>
        Просчитай свою суточную <br /> норму калорий
      </h1>
      <Formik
        initialValues={{
          height: '', // рост
          age: '', // возвраст
          currentWeight: '', // текущий вес
          desiredWeight: '', // желаемый вес
          bloodType: '1', // группа крови}
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // localStorage.setItem('user', JSON.stringify(values));
          console.log(values);
          sendRequestDaily(values);
          modalOpen();
        }}
      >
        {
          (/*{ values, handleChange, isValid, dirty, handleSubmit }*/) => (
            <Form className={styles.dailyForm} /*onSubmit={handleSubmit}*/>
              <div className="">
                <label htmlFor="age" className={styles.dailyLabel}>
                  Рост *
                  <Field
                    // value={values.height}
                    // onChange={handleChange}
                    id="height"
                    name="height"
                    type="text"
                    className={styles.daily_input}
                  />
                  <ErrorMessage name="height">
                    {err => <p className={styles.errorMessage}>{err}</p>}
                  </ErrorMessage>
                </label>

                <label htmlFor="age" className={styles.dailyLabel}>
                  Возраст *
                  <Field
                    // value={values.age}
                    // onChange={handleChange}
                    id="age"
                    name="age"
                    type="text"
                    className={styles.daily_input}
                  />
                  <ErrorMessage name="age">
                    {err => <p className={styles.errorMessage}>{err}</p>}
                  </ErrorMessage>
                </label>

                <label htmlFor="currentWeight" className={styles.dailyLabel}>
                  Текущий вес *
                  <Field
                    // value={values.currentWeight}
                    // onChange={handleChange}
                    id="currentWeight"
                    name="currentWeight"
                    type="text"
                    className={styles.daily_input}
                  />
                  <ErrorMessage name="currentWeight">
                    {err => <p className={styles.errorMessage}>{err}</p>}
                  </ErrorMessage>
                </label>

                <label htmlFor="desiredWeight" className={styles.dailyLabel}>
                  Желаемый вес *
                  <Field
                    // value={values.desiredWeight}
                    // onChange={handleChange}
                    id="desiredWeight"
                    name="desiredWeight"
                    type="text"
                    className={styles.daily_input}
                  />
                  <ErrorMessage name="desiredWeight">
                    {err => <p className={styles.errorMessage}>{err}</p>}
                  </ErrorMessage>
                </label>

                <div id="bloodType" className={styles.check_label}>
                  <label className={styles.dailyLabel}>
                    Группа крови *
                    <br />
                    <Field
                      value="1"
                      // onChange={handleChange}
                      className={styles.radio}
                      name="bloodType"
                      type="radio"
                      checked={true}
                    />
                    1
                    <Field
                      // value={values.bloodType}
                      value="2"
                      // onChange={handleChange}
                      className={styles.radio}
                      name="bloodType"
                      type="radio"
                    />
                    2
                    <Field
                      //value={values.bloodType}
                      value="3"
                      // onChange={handleChange}
                      className={styles.radio}
                      name="bloodType"
                      type="radio"
                    />
                    3
                    <Field
                      //value={values.bloodType}
                      value="4"
                      // onChange={handleChange}
                      className={styles.radio}
                      name="bloodType"
                      type="radio"
                    />
                    4
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    //disabled={!isValid || !dirty}
                    className={styles.dailyButton}
                    // onClick={modalOpen}
                  >
                    Похудеть
                  </button>
                  {isModalOpen && <Modal />}
                </div>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

const mapStateToProps = state => ({ isModalOpen: getModalIsOpen(state) });

const mapDispatchToProps = {
  modalOpen: modalOperations.openModal,
  sendRequestDaily: calculatorOperations.getDailyRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyCaloriesForm);

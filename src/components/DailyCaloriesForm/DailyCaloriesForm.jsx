import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './DailyCaloriesForm.module.css';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import { getModalIsOpen } from '../../redux/modal/modal-selector';
import modalActions from '../../redux/modal/modal-actions';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

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
//   height: '', // рост
//   age: '', // возвраст
//   currentWeight: '', // текущий вес
//   desiredWeight: '', // желаемый вес
//   bloodType: '1', // группа крови
// };

const DailyCaloriesForm = ({
  isAuthenticated,
  isModalOpen,
  modalOpen,
  sendRequestDaily,
  sendRequestDailyPrivate,
}) => {
  return (
    <div className={styles.caloriesWrapper}>
      <h1 className={styles.dailyForm_title}>
        Просчитай свою суточную норму калорий прямо сейчас
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
        onSubmit={async (values, { resetForm }) => {
          if (!isAuthenticated) {
            await sendRequestDaily(values);
            await modalOpen();
          }
          await sendRequestDailyPrivate(values);
          resetForm();
        }}
      >
        {
          (/*{ values, handleChange, isValid, dirty, handleSubmit }*/) => (
            <Form className={styles.dailyForm} /*onSubmit={handleSubmit}*/>
              <div className={styles.currentUserData}>
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
              </div>
              <div className={styles.desiredWeightAndBloodType}>
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
                <div className={styles.buttonWrapper}>
                  <button
                    type="submit"
                    //disabled={!isValid || !dirty}
                    className={styles.dailyButton}
                    // onClick={modalOpen}
                  >
                    Похудеть
                  </button>
                </div>
              </div>
            </Form>
          )
        }
      </Formik>
      {isModalOpen && <Modal />}
    </div>
  );
};

const mapStateToProps = state => ({
  isModalOpen: getModalIsOpen(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  modalOpen: modalActions.modalOpenSuccess,
  sendRequestDaily: authOperations.getDailyRate,
  sendRequestDailyPrivate: authOperations.getDailyRatePrivate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyCaloriesForm);

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import Button from '../Button';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';
import './styles.css';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const Login = ({onLogin, error}) => {
  return (
    <div className="login">
      <h1 className="login__title">Вход</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          const payload = { ...values };
          console.log('payload', payload);
          onLogin(payload);
        }}
      >
        {({errors, touched}) => (
          <>
            <Form id="login" className="login__form" autoComplete="off">
              <div className="input-wrapper">
                <div className="box">
                  <Field
                    className="login__email-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ел. адрес *"
                    autoComplete="off"
                  />
                  { errors.email && touched.email ? (
                    <div className="login__error">{errors.email}</div>
                  ) : null}
                  <label
                    htmlFor="email"
                    className="login__labe-email"
                  >
                  </label>
                </div>

                <div className="box">
                  <Field
                    className="login__password-input"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль *"
                    autoComplete="off"
                  />
                  { errors.password && touched.password ? (
                    <div className="login__error">{errors.password}</div>
                  ) : null}
                  <label
                    htmlFor="password"
                    className="login__labe-password"
                  >
                  </label>
                </div>

              </div>
              { error && (
                <div className="error-login">Incorrect input data!</div>)}
            </Form>
            <div className="registration__button-reg">
              <Button
                type={'submit'}
                title={'Вход'}
                form={'login'}
              />
            </div>
            <div className="registration__button-login">
              <Link to="/register">
                <Button
                  type={'button'}
                  title={'Регистрация'}
                />
              </Link>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  error: authSelectors.getError(state),
});

const mapDispatchToProps = {
//   onRegister: authOperations.register,
  onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

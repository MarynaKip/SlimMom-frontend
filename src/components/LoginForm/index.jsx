import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import './styles.css';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
});

const initialValues={
  email: '',
  password: '',
};

const Login = () => {
  return (
    <div className="login">
      <h1 className="login__title">Вход</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({errors, touched}) => (
          <Form className="login__form" autoComplete="off">
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

            <button
              type="submit"
              className="login__button-submit"
            >
            Вход
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

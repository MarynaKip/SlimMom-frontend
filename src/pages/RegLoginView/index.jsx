import Registration from '../../components/RegistrationForm';
// import Login from '../../components/LoginForm';
import './styles.css';

const RegLoginView = ({path}) => {
  return (
    <div className="login-page">
      {/* {path && <Registration />}
      {path && <Login />} */}

      {/* <Login /> */}
      <Registration />
    </div>
  );
};

export default RegLoginView;

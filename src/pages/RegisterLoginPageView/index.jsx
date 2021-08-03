import './styles.css';
import RegLoginView from '../RegLoginView';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

const RegisterLoginPageView = isLoading => {
  return (
    <main className="bg-wrapper__reg">
      <Header />
      <div className="login-page">
        {!isLoading ? (
          <div className="spinner-wrapper__reg">
            <Spinner />
          </div>
        ) : (
          <RegLoginView />
        )}
      </div>
    </main>
  );
};
export default RegisterLoginPageView;

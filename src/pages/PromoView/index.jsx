import './styles.css';
// import Login from '../../components/LoginForm';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';

const PromoView = isLoading => {
  return (
    <main className="bg-wrapper__promo">
      <Header />
      {!isLoading ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : (
        <div className="calories-promo-wrapper">
          <DailyCaloriesForm />
        </div>
      )}
    </main>
  );
};
export default PromoView;

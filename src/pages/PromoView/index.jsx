import './styles.css';
// import Login from '../../components/LoginForm';
import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';

const PromoView = () => {
  return (
    <main className="bg-wrapper__promo">
      <Header />
      <div className="calories-promo-wrapper">
        <DailyCaloriesForm />
      </div>
    </main>
  );
};
export default PromoView;

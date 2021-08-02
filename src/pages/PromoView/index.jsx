import './styles.css';
// import Login from '../../components/LoginForm';
import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';

const PromoView = () => {
  return (
    <main className="bg-wrapper__promo">
      <Header />
      <DailyCaloriesForm />
    </main>
  );
};
export default PromoView;

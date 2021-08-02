import './styles.css';
// import Login from '../../components/LoginForm';
import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';

const PromoView = () => {
  return (
    <div className="bg-wrapper__promo">
      <Header />
      {/* <Login /> */}
      <div className="promopage-container">
        <DailyCaloriesForm />
      </div>
    </div>
  );
};
export default PromoView;

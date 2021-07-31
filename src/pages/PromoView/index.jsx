import './styles.css';
import Login from '../../components/LoginForm';
import Header from '../../components/Header';

const PromoView = (props) => {
  return (
    <main className="bg-wrapper__promo">
      <Header />
      <Login />
    </main>
  );
};
export default PromoView;

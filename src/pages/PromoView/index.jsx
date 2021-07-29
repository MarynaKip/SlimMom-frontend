import './styles.css';
import Header from '../../components/Header';
import Login from '../../components/LoginForm';
import Register from '../../components/RegistrationForm';
import { Switch } from 'react-router-dom';

const PromoView = () => {
    return (
        <div className="bg-wrapper__promo">
            <Header />
            {/* <Register/> */}
            <Login />
        </div>
    );
};
export default PromoView;

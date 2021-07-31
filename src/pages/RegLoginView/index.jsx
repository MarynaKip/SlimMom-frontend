import Registration from '../../components/RegistrationForm';
import Login from '../../components/LoginForm';
import ContainerForView from '../../components/ContainerForLogin';
import './styles.css';

const RegLoginView = () => {
    return (
        <ContainerForView>
            {/* eslint-disable-next-line */}
            {location.pathname === '/register' && <Registration />}

            {/* eslint-disable-next-line */}
            {location.pathname === '/login' && <Login />}
        </ContainerForView>
    );
};

export default RegLoginView;

import './styles.css';
import RegLoginView from '../RegLoginView';
import Header from '../../components/Header';

const RegisterLoginPageView = () => {
    return (
        <main className="bg-wrapper__reg">
            <Header />
            <RegLoginView />
        </main>
    );
};
export default RegisterLoginPageView;

import { Switch, Route, Redirect } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
// import Modal from './components/Modal';
import routes from './routes';
import './App.css';
import PromoView from './pages/PromoView';
import DiaryPageView from './pages/DiaryPageView';
import RegisterLoginPageView from './pages/RegisterLoginPageView';
import DailyCaloriesForm from './components/DiaryAddProductForm';
import CalculatorForm from './pages/CalculatorPage';

const App = () => {
    return (
        <>
            <Switch>
                <PublicRoute exact path={routes.home} component={PromoView} />
                <PublicRoute
                    path={routes.register}
                    restricted
                    redirectTo={routes.mydiary}
                    component={RegisterLoginPageView}
                />
                <PublicRoute
                    path={routes.login}
                    restricted
                    redirectTo={routes.mydiary}
                    component={RegisterLoginPageView}
                />
                <PublicRoute path={routes.mydiary} component={DiaryPageView} />
                <DailyCaloriesForm/>
                <PrivateRoute path={routes.calculator} render={CalculatorForm}/>
                {/* {modal && <Modal />} */}
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;


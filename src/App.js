import { Switch, Route } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
// import PrivateRoute from './components/PrivateRoute';
import routes from './routes';
import './App.css';
import PromoView from './pages/PromoView';
import DiaryPageView from './pages/DiaryPageView';
import RegisterLoginPageView from './pages/RegisterLoginPageView';

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
                {/* <PrivateRoute path={routes.calculator} render={Calculator}/> */}
            </Switch>
        </>
    );
};

export default App;

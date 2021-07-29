import { Switch, Route } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import routes from './routes';
import './App.css';
import Header from './components/Header';
import Login from './components/LoginForm';
import Register from './components/RegistrationForm';
import PromoView from './pages/PromoView';
import DiaryPageView from './pages/DiaryPageView';

const App = () => {
    return (
        <>
            <Header />
            <main className="bg-wrapper">
                <Switch>
                    <PublicRoute
                        exact
                        path={routes.home}
                        component={PromoView}
                    />
                    <PublicRoute
                        path={routes.register}
                        restricted
                        redirectTo={routes.diary}
                        component={Register}
                    />
                    <PublicRoute
                        path={routes.login}
                        restricted
                        redirectTo={routes.diary}
                        component={Login}
                    />
                    <PrivateRoute
                        path={routes.diary}
                        component={DiaryPageView}
                    />
                    {/* <Route path={routes.calculator} render={Calculator}/> */}
                </Switch>
            </main>
        </>
    );
};

export default App;

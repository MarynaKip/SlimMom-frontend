import { Switch, Route } from 'react-router-dom';
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
                    <Route exact path={routes.home} render={PromoView} />
                    <Route path={routes.register} render={Register} />
                    <Route path={routes.login} render={Login} />
                    <Route path={routes.diary} render={DiaryPageView} />
                    {/* <Route path={routes.calculator} render={Calculator}/> */}
                </Switch>
            </main>
        </>
    );

};

export default App;

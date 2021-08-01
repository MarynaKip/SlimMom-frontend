import { Switch, Route, Redirect } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
// import Modal from './components/Modal';
import routes from './routes';
import './App.css';
import PromoView from './pages/PromoView';
import DiaryPageView from './pages/DiaryPageView';
import RegisterLoginPageView from './pages/RegisterLoginPageView';
// import Header from './components/Header';
import CalculatorPageView from './pages/CalculatorPageView';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import { useEffect, Suspense, lazy } from 'react';

const App = ({ onGetCurrentUser }) => {
  useEffect(() => {
    onGetCurrentUser();
  }, []);
  return (
    <>
      <Switch>
        <PublicRoute
          exact
          path={routes.home}
          restricted
          redirectTo={routes.mydiary}
          component={PromoView}
        />
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

        <PrivateRoute
          path={routes.mydiary}
          redirectTo={routes.home}
          component={DiaryPageView}
        />
        <PrivateRoute
          path={routes.calculator}
          redirectTo={routes.home}
          component={CalculatorPageView}
        />
        {/* {modal && <Modal />} */}
        <Redirect to={routes.home} />
      </Switch>
    </>
  );
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

export default connect(null, mapDispatchToProps)(App);

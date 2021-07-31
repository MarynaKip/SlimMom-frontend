import { Switch, Route, Redirect } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
// import PrivateRoute from './components/PrivateRoute';
// import Modal from './components/Modal';
import routes from './routes';
import './App.css';
import PromoView from './pages/PromoView';
import DiaryPageView from './pages/DiaryPageView';
import RegisterLoginPageView from './pages/RegisterLoginPageView';

import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import { useEffect, Suspense, lazy } from 'react';

const App = ({ onGetCurrentUser }) => {
  useEffect(() => {
    onGetCurrentUser();
  }, []);
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
        {/* {modal && <Modal />} */}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

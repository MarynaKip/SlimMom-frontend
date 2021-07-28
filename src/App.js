import {Switch, Route} from 'react-router-dom';

import './App.css';
// import Header from './components/Header';

import HeaderView from './pages/HeaderView';

// import DiaryPageView from './pages/DiaryPageView'

import RegLoginView from './pages/RegLoginView';

const App = () => {
  return (
    <div>
      <HeaderView />
      <Switch>
        <Route path="/register" component={RegLoginView} />
        <Route path="/login" component={RegLoginView} />
      </Switch>
    </div>
  );
};

export default App;

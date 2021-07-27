import './App.css';
// import Header from './components/Header';
import ContainerForView from './components/ContainerForLogin';
import HeaderView from './pages/HeaderView';

// import DiaryPageView from './pages/DiaryPageView'

import RegLoginView from './pages/RegLoginView';

const App = () => {
  return (
    <div>
      <HeaderView />
      <ContainerForView>
        <RegLoginView />
      </ContainerForView>
    </div>
  );
};

export default App;

import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/Spinner';
import './styles.css';

const CalculatorPageView = isloading => {
  return (
    <div className="bg-wrapper__diary">
      <Header />
      <div className="diarypage-container">
        {!isloading ? (
          <div className="spinner-wrapper__diary">
            <Spinner />
          </div>
        ) : (
          <DailyCaloriesForm />
        )}
        <Sidebar />
      </div>
    </div>
  );
};
export default CalculatorPageView;

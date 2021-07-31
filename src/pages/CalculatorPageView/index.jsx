import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Sidebar from '../../components/Sidebar';
import './styles.css';

const CalculatorPageView = () => {
    return (
        <div className="bg-wrapper__diary">
            <Header />
            <div className="diarypage-container">
                <DailyCaloriesForm />
                <Sidebar />
            </div>
        </div>
    );
};
export default CalculatorPageView;

import DailyCalories from '../../components/DailyCaloriesForm';
import Header from '../../components/Header';
// import './styles.css';

const CalculatorForm = () => {
  return (
    <div className=" ">
      <Header goBack={false} />
      <DailyCalories />
    </div>
  );
};

export default CalculatorForm;

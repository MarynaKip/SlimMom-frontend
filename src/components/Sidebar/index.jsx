// import { connect } from 'react-redux';
import './styles.css';

const Sidebar = ({
  currentDate = '26/05/2021',
  dailyAmount = 2800,
  consumedCal = 1300,
  notRecommended,
  leftCal,
  percentage,
}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-summary">
          <h2 className="sidebar-summary__title">
                        Сводка за {currentDate}
          </h2>
          <div className="sidebar-summary__container">
            <ul className="list main-font">
              <li>Осталось</li>
              <li>Употреблено</li>
              <li>Дневная норма</li>
              <li>n% от нормы</li>
            </ul>
            <ul className="sidebar-summary__cal list main-font ">
              <li>{leftCal} ккал</li>
              <li>{consumedCal} ккал</li>
              <li>{dailyAmount} ккал</li>
              <li>{percentage}% ккал</li>
            </ul>
          </div>
        </div>
        <div className="sidebar-disrecommended">
          <h2 className="sidebar-disrecommended__title">
                        Нерекомендуемые продукты
          </h2>
          <p className="main-font">
            {notRecommended}
                        Все бульоны/отвары, жирная рыба, икра и мясо, грибы,
                        крупы (пшено, перловая, пшеничная)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

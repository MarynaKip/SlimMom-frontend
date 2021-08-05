import { connect } from 'react-redux';
import sidebarSelectors from '../../redux/sidebar/sidebar-selectors';
import './styles.css';

const Sidebar = ({
  currentDate,
  dailyAmount,
  consumedCal,
  notRecommended,
  leftCal,
  percentage,
}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-summary">
          <h2 className="sidebar-summary__title">Сводка за {currentDate}</h2>
          <div className="sidebar-summary__container">
            <ul className="list main-font">
              <li>Осталось</li>
              <li>Употреблено</li>
              <li>Дневная норма</li>
              <li>n% от нормы</li>
            </ul>
            <ul className="sidebar-summary__cal list main-font ">
              <li>{leftCal >= 0 ? leftCal : 'Остановись!'} ккал</li>
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
          <p className="main-font">{notRecommended}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentDate: sidebarSelectors.getCurrentDate(state),
  dailyAmount: sidebarSelectors.getDailyMeal(state),
  consumedCal: sidebarSelectors.getConsumedCal(state),
  notRecommended: sidebarSelectors.notAllowedProducts(state),
  leftCal: sidebarSelectors.getLeftCal(state),
  percentage: sidebarSelectors.getPercentage(state),
});

export default connect(mapStateToProps, null)(Sidebar);

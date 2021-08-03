import './styles.css';
// import Login from '../../components/LoginForm';
import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import { getModalIsOpen } from '../../redux/modal/modal-selector';
import Modal from '../../components/Modal';
import { connect } from 'react-redux';

const isMobile = window.screen.width < 400;

const PromoView = ({ isModalOpen }) => {
  console.log(isMobile, isModalOpen);
  return (
    <div className="bg-wrapper__promo">
      <Header />
      {/* <Login /> */}
      <div className="promopage-container">
        {
          // isMobile &&
          isModalOpen ? <Modal /> : <DailyCaloriesForm />
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ isModalOpen: getModalIsOpen(state) });

export default connect(mapStateToProps)(PromoView);

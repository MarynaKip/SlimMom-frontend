import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import modalOperations from '../../redux/modal/modal-operations';
import routes from '../../routes';
import './modal.css';
import calculatorSelectors from '../../redux/auth/auth-selectors';

const modalRoot = document.querySelector('#modal-root');
const isMobile = window.screen.width < 400;

function Modal({ modalClose, dailyNorm, categories }) {
  console.log(dailyNorm, categories);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return function reset() {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      modalClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    } else modalClose();
  };
  return createPortal(
    <div className="backdrop" onClick={handleOverlayClick}>
      <div className="modal">
        <button
          className="modal_closeButton"
          type="button"
          onClick={modalClose}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="modal_icon"
          >
            {isMobile ? (
              <path
                d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
                stroke="black"
                strokeWidth="2"
              />
            ) : (
              <path d="M15.8333 5.3415L14.6583 4.1665L9.99998 8.82484L5.34164 4.1665L4.16664 5.3415L8.82498 9.99984L4.16664 14.6582L5.34164 15.8332L9.99998 11.1748L14.6583 15.8332L15.8333 14.6582L11.175 9.99984L15.8333 5.3415Z" />
            )}
          </svg>
        </button>
        <h2 className="modal_title">
          Ваша рекомендуемая суточная норма калорий составляет
        </h2>
        <div className="modal_container">
          <p className="modal_text">
            <span className="modal_number">{dailyNorm}</span> ккал
          </p>
          <div className="modal_underline"></div>
          <p className="modal_products">
            Продукты, которые вам <br />
            не рекомендуется употреблять
          </p>
          <ol className="modal_categories">
            {categories.map(category => (
              <li className="modal_categories-item" key={category}>
                {category}
              </li>
            ))}
          </ol>
        </div>
        <Link
          to={routes.register}
          className="modal_button"
          onClick={modalClose}
        >
          Начать худеть
        </Link>
      </div>
    </div>,
    modalRoot,
  );
}

const mapStateToProps = state => ({
  dailyNorm: calculatorSelectors.getDailyNorm(state),
  categories: calculatorSelectors.getNotAllowedProducts(state),
});

const mapDispatchToProps = { modalClose: modalOperations.closeModal };

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

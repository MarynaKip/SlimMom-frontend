import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.code === 'Escape') {
      console.log('Esc hit');
    }
  }

  handleOverlayClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    } else console.log('must close modal');
  }

  render() {
    return createPortal(
      <div className="backdrop" onClick={this.handleOverlayClick}>
        <div className="modal">
          <button
            className="modal_close"
            type="button"
            onClick={() => console.log('close modal')}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="modal_cross"
            >
              <path d="M15.8333 5.3415L14.6583 4.1665L9.99998 8.82484L5.34164 4.1665L4.16664 5.3415L8.82498 9.99984L4.16664 14.6582L5.34164 15.8332L9.99998 11.1748L14.6583 15.8332L15.8333 14.6582L11.175 9.99984L15.8333 5.3415Z" />
            </svg>
          </button>
          <h2 className="modal_title">
                        Ваша рекомендуемая суточная норма калорий составляет
          </h2>
          <div className="modal_container">
            <p className="modal_text">
              <span className="modal_number">2800</span> ккал
            </p>
            <div className="modal_underline"></div>
            <p className="modal_products">
                            Продукты, которые вам <br />
                            не рекомендуется употреблять
            </p>
            {/* <ol className="modal_categories">
              {categories.map((category) => (
                <li className="modal_categories-item" key="product.category"></li>
              ))}
            </ol> */}
            <ol className="modal_categories">
              <li className="modal_categories-item">
                                Мучные продукты
              </li>
              <li className="modal_categories-item">Молоко</li>
              <li className="modal_categories-item">
                                Красное мясо{' '}
              </li>
              <li className="modal_categories-item">
                                Копчености
              </li>
            </ol>
          </div>
          <button className="modal_button" type="button">
                        Начать худеть
          </button>
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;

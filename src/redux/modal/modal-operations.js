import modalActions from './modal-actions';

const isMobile = window.screen.width < 400;

const openModal = () => async dispatch => {
  if (!isMobile) {
    document.body.classList.add('modal-open');
  }
  dispatch(modalActions.modalOpenSuccess());
};

const closeModal = () => async dispatch => {
  document.body.classList.remove('modal-open');
  dispatch(modalActions.modalCloseSuccess());
};
export default { openModal, closeModal };

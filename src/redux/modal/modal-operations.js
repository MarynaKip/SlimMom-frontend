import modalActions from './modal-actions';

const openModal = () => async dispatch => {
  dispatch(modalActions.modalOpenRequest());
  document.body.classList.add('modal-open');
  try {
    dispatch(modalActions.modalOpenSuccess());
  } catch (error) {
    dispatch(modalActions.modalOpenError(error.message));
  }
};

const closeModal = () => async dispatch => {
  dispatch(modalActions.modalCloseRequest());
  document.body.classList.remove('modal-open');
  try {
    dispatch(modalActions.modalCloseSuccess());
  } catch (error) {
    dispatch(modalActions.modalCloseError(error.message));
  }
};
export default { openModal, closeModal };

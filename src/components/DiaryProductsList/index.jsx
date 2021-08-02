import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import { useDispatch, useSelector, connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { diarySelectors } from '../../redux/diary';

import DiaryProductsListItem from '../DiaryProductsListItem';

const DiaryProductsList = ({ historyProductsArray, historyDate }) => {
  const today = new Date().toLocaleDateString().split('.').reverse().join('-');

  return (
    <ul className={styles.productsListDiary}>
      {historyProductsArray.map(
        ({ productName, productWeight, productKkal }) => (
          <DiaryProductsListItem
            key={uuidv4()}
            productName={productName}
            productWeight={productWeight}
            productKkal={productKkal}
            buttonRender={today === historyDate}
          />
        ),
      )}
    </ul>
  );
};
const mapStateToProps = state => ({
  currentProductsArray: diarySelectors.getProducts(state),
  historyProductsArray: diarySelectors.getHistoryProducts(state),
  historyDate: diarySelectors.getHistoryDate(state),
});
export default connect(mapStateToProps)(DiaryProductsList);

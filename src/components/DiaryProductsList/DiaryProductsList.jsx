import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { diarySelectors } from '../../redux/diary';

import DiaryProductsListItem from '../DiaryProductsListItem';

const DiaryProductsList = ({
  currentProductsArray,
  historyDate,
  historyProductsArray,
  today,
}) => {
  const isToday = today === historyDate;

  return (
    <>
      {isToday ? (
        <ul className={styles.productsListDiary}>
          {currentProductsArray.map(
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
      ) : (
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
      )}
    </>
  );
};
const mapStateToProps = state => ({
  currentProductsArray: diarySelectors.getProducts(state),
  historyProductsArray: diarySelectors.getHistoryProducts(state),
  historyDate: diarySelectors.getHistoryDate(state),
  today: diarySelectors.getToday(state),
});
export default connect(mapStateToProps)(DiaryProductsList);

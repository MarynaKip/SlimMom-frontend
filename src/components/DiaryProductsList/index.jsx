import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import { useSelector } from 'react-redux';
import { diarySelectors } from '../../redux/diary';
import { v4 as uuidv4 } from 'uuid';

import DiaryProductsListItem from '../DiaryProductsListItem';

export default function DiaryProductsList() {
  const today = new Date().toLocaleDateString().split('.').reverse().join('-');
  const historyProductsArray = useSelector(diarySelectors.getHistoryProducts);
  const historyDate = useSelector(diarySelectors.getHistoryDate);
  return (
    <>
      {historyProductsArray.length !== 0 ? (
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
      ) : (
        <p>Вы ничего не ели в этот день </p>
      )}
    </>
  );
}

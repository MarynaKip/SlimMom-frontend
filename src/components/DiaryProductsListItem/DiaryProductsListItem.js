import { useDispatch } from 'react-redux';
import { diaryOperations } from '../../redux/diary';

/* eslint-disable max-len */
import styles from '../DiaryProductsListItem/DiaryProductsListItem.module.css';

export default function DiaryProductsListItem({
  productName,
  productWeight,
  productKkal,
  buttonRender,
}) {
  const dispatch = useDispatch();

  return (
    <li>
      <span className={styles.diaryListItemName}>{productName}</span>
      <span className={styles.diaryListItemGrams}>{productWeight} г</span>
      <span className={styles.diaryListItemCalories}>
        {productKkal}{' '}
        <span className={styles.diaryListItemCaloriesValue}>ккал</span>
      </span>
      {buttonRender ? (
        <button
          className={styles.diaryListItemButton}
          type="submit"
          onClick={() => {
            dispatch(diaryOperations.deleteProduct({ productName }));
          }}
        >
          &#10006;
        </button>
      ) : null}
    </li>
  );
}

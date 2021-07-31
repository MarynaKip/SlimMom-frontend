/* eslint-disable max-len */
import styles from '../DiaryProductsListItem/DiaryProductsListItem.module.css';

const DiaryProductsListItem = ({ productName, productWeight, productKkal }) => {
  return (
    <li>
      <span className = {styles.diaryListItemName}>{productName}</span>
      <input className = {styles.diaryListItemGrams} value={productWeight} />
      <span className = {styles.diaryListItemCalories} >{productKkal} <span className = {styles.diaryListItemCaloriesValue}>ккал</span></span>
      <button className = {styles.diaryListItemButton}type= "submit">&#10006;</button>
    </li>
  );
};
export default DiaryProductsListItem;

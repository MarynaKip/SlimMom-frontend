import styles from '../DiaryProductsListItem/DiaryProductsListItem.module.css';
const amount = 1000;

const DiaryProductsListItem = () => {
  return (
    <li>
      <span className = {styles.diaryListItemName}>Баклажан</span>
      <input className = {styles.diaryListItemGrams} value={amount} />
      <span className = {styles.diaryListItemCalories} >285 <span className = {styles.diaryListItemCaloriesValue}>ккал</span></span>
      <button className = {styles.diaryListItemButton}type= "submit">&#10006;</button>
    </li>
  );
};
export default DiaryProductsListItem;

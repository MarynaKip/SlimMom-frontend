import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import { useDispatch, useSelector,connect } from 'react-redux';
import { diarySelectors } from '../../redux/diary';
import { v4 as uuidv4 } from "uuid";



const DiaryProductsList=({currentProductsArray,historyProductsArray,historyDate}) =>{
  // const dispatch = useDispatch();
 
  const today = new Date().toLocaleDateString().split('.').reverse().join('-');
  // const currentDate = useSelector(diarySelectors.getHistoryDate);

  const productsForList = ()=> 
  {
    if (today === historyDate) {
      return currentProductsArray;
  }
  else {
      return historyProductsArray;
  }    
}
  

  return (
    <ul className={styles.productsListDiary}>
      {productsForList().map(({productName, productWeight, productKkal }) => (
        <DiaryProductsListItem key={uuidv4()}
          productName={productName}
          productWeight={productWeight}
          productKkal={productKkal}
          buttonRender = {today === historyDate}
        />
      ))}
    </ul>
  );
}
const mapStateToProps = state => ({
  currentProductsArray: diarySelectors.getProducts(state),
  historyProductsArray: diarySelectors.getHistoryProducts(state),
  historyDate: diarySelectors.getHistoryDate(state)
});
export default connect(mapStateToProps)(DiaryProductsList);
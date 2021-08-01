import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { diarySelectors } from '../../redux/diary';
import { v4 as uuidv4 } from "uuid";


export default function DiaryProductsList() {
  const dispatch = useDispatch();
 
  const today = new Date().toLocaleDateString().split('.').reverse().join('-');
  const currentDate = useSelector(diarySelectors.getHistoryDate);

  const productsForList = ()=> 
  {
    if (today === currentDate) {
    return useSelector(diarySelectors.getProducts)
  }
  else {
    return useSelector(diarySelectors.getHistoryProducts)
  }    
}
  
  
  // const productsToday =  useSelector(diarySelectors.getProducts);
  // const productsForList = useSelector(diarySelectors.getHistoryProducts);
  // console.log(productsForList);
  return (
    <ul className={styles.productsListDiary}>
      {productsForList().map(({productName, productWeight, productKkal }) => (
        <DiaryProductsListItem key={uuidv4()}
          productName={productName}
          productWeight={productWeight}
          productKkal={productKkal}
          buttonRender = {today === currentDate}
        />
      ))}
    </ul>
  );
}

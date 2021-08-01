import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { diarySelectors } from '../../redux/diary';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';


export default function DiaryProductsList ()  {
  // const today = new Date().toLocaleDateString().split('.').reverse().join('-');
  // const historyDate = useSelector(diarySelectors.getHistoryDate);
  // const isToday = today !== historyDate;
  // console.log(today)
  // console.log(historyDate)
  // console.log(isToday)

  const todayProducts = useSelector(diarySelectors.getProducts);
  const historyProducts = useSelector(diarySelectors.getHistoryProducts);


  return (
  
     
    <ul className={styles.productsListDiary}>
      {/* {is} */}
        {todayProducts.map(({ productName, productWeight, productKkal }) => (
          <DiaryProductsListItem
            key={uuidv4()}
            productName={productName}
            productWeight={productWeight}
            productKkal={productKkal}
            buttonRender={isToday}
          />
        ))}
      </ul>
    
  );
};


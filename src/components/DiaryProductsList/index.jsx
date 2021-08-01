import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { diarySelectors } from '../../redux/diary';
import { v4 as uuidv4 } from "uuid";


export default function DiaryProductsList() {
  const dispatch = useDispatch();
  const productsForList = useSelector(diarySelectors.getProducts);
  console.log(productsForList);
  return (
    <ul className={styles.productsListDiary}>
      {productsForList.map(({productName, productWeight, productKkal }) => (
        <DiaryProductsListItem key={uuidv4()}
          productName={productName}
          productWeight={productWeight}
          productKkal={productKkal}
        />
      ))}
    </ul>
  );
}

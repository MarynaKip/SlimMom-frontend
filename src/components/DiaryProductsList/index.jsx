import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from '../DiaryProductsList/DiaryProductsList.module.css';
// const products = [{"prod": grechka,
// data: 21/21/21,
// userID:12345,
// id: 147,
// gramm: 154,
// kkal: 789
// },
// {"prod": egg,
// data: 21/21/21,
// userID:12345,
// id: 147,
// gramm: 154,
// kkal: 400
// },
// {"prod": cake,
// data: 21/21/21,
// userID:12345,
// id: 147,
// gramm: 154,
// kkal: 7089
// }]

const DiaryProductsList = () => {
  return (<ul className = {styles.productsListDiary}>
    <DiaryProductsListItem/>
    <DiaryProductsListItem/>
    <DiaryProductsListItem/>
    <DiaryProductsListItem/>
  </ul>
  );
};
export default DiaryProductsList;

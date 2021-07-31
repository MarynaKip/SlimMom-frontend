import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from '../DiaryProductsList/DiaryProductsList.module.css';

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

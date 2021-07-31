import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { diaryOperations } from "../../redux/diary";


// import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

import styles from '../DiaryAddProductForm/DiaryAddProductForm.module.css';

// axios.defaults.headers.common['Authorization'] =
//     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA0ZjRiNjJiODVmYTAwMWMyMmFlZDYiLCJlbWFpbCI6ImxhaW1hdkBnbWFpbC5jb20iLCJpYXQiOjE2Mjc3MTQ3NDJ9.600zEwSXhkCYvV1Tzml5wZ7fmI22-pA_R7x9gwi5X3s';

// const [query, setQuery] = useState(' ');
// // from docs react-debounce-input

// // const searchQuery = 'кру';
// const fetchProducts = () => {
//     return axios.get(
//         `https://obscure-shelf-16384.herokuapp.com/api/products?input=gt`,
//     ).then(response => console.log(response)),[]
// };
// useEffect(() => {fetchProducts()})
//  const handleChange = useCallback(event => {
//         setQuery(event.target.value);
//  }, []);

const isMobile = window.screen.width < 768;

export default function DiaryAddProductForm() {
    const [productName, setProductName] = useState('');
    const [productWeight, setProductWeight] = useState('');

    const changeInput = useCallback(event => {
        const { name, value } = event.target;
        switch (name) {
            case 'productName':
                return setProductName(value);
            case 'productWeight':
                return setProductWeight(value);
            default:
                return null;
        }
    }, []);
    const dispatch = useDispatch();

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(diaryOperations.addProduct({ productName, productWeight }));

        resetInput();
    };

    const resetInput = () => {
        setProductName('');
        setProductWeight('');
    };

    return (
        <div>
            <form
                className={styles.addProductForm}
                onSubmit={handleFormSubmit}
            >
                <DebounceInput
                    minLength={2}
                    debounceTimeout={500}
                    className={styles.inputAddProductFormName}
                    id="productName"
                    name="productName"
                    type="productName"
                    value={productName}
                    onChange={changeInput}
                    placeholder="Введите название продукта"
                    required
                    list="products-for-add"
                    autoComplete="off"
                />

                <datalist id="products-for-add">
                    <option value="Гречневая крупа (ядрица) зелёная"></option>
                    <option value="Кускус Агро-Альянс"></option>
                    <option value="Манная крупа Агро-Альянс"></option>
                </datalist>

                <input
                    className={styles.inputAddProductFormAmount}
                    id="grams"
                    name="productWeight"
                    type="grams"
                    value={productWeight}
                    onChange={changeInput}
                    placeholder="Граммы"
                    required
                    autoComplete="off"
                />
                {isMobile ? (
                    <button
                        type="submit"
                        className={styles.buttonAddProductMobile}
                    >
                        Добавить
                    </button>
                ) : (
                    <button type="submit" className={styles.buttonAddProduct}>
                        +
                    </button>
                )}
            </form>
        </div>
    );
}

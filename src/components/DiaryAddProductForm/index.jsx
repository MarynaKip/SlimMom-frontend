import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

import styles from '../DiaryAddProductForm/DiaryAddProductForm.module.css';

axios.defaults.headers.common['Authorization'] =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA0Mzg4NjBkOTA4YzRmNjgxMGEyOWUiLCJlbWFpbCI6ImxhaW1hQGdtYWlsLmNvbSIsImlhdCI6MTYyNzY2NjU2Nn0.3k27p65QbnNWnR7sKCY0pwbrchORmXx6S-FqpBZZRvc';

const isMobile = window.screen.width < 768;


export default function DiaryAddProductForm() {
  const [productQuery, setProductQuery] = useState('');
  const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
  const response = await axios.get (
    'localhost:8080/api/products?input=кру'
  );
  const data = await response.json()
  setRecipes(data)
  console.log(data)
}
   
  useEffect(() => {
    console.log("useEffect has been run");
     getRecipes()
    }, [productQuery]);

    const changeInput = useCallback(event => {
        setProductQuery(event.target.value);
    }, []);

    return (
        <div>
            <form
                // onSubmit={handleSubmit}
                className={styles.addProductForm}
            >
                <DebounceInput
                    minLength={2}
                    debounceTimeout={500}
                    className={styles.inputAddProductFormName}
                    id="productName"
                    name="productName"
                    type="productName"
                    onChange={changeInput}
                    placeholder="Введите название продукта"
                    required
                    list="products-for-add"
                    autoComplete="off"
                />

                <datalist id="products-for-add">
                    <option>gre4ka</option>
                    <option value="jaico"></option>
                    <option value="salo"></option>
                    <option value="moloko"></option>
                    <option value="grechka"></option>
                </datalist>

                <input
                    className={styles.inputAddProductFormAmount}
                    id="grams"
                    name="grams"
                    type="grams"
                    // onChange={formik.handleChange}
                    // value={formik.values.grams}
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

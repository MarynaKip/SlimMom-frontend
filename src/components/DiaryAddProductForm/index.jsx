import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { diaryOperations } from '../../redux/diary';
import {authSelectors} from '../../redux/auth';
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

import styles from '../DiaryAddProductForm/DiaryAddProductForm.module.css';


const isMobile = window.screen.width < 768;

export default function DiaryAddProductForm() {
  const [productName, setProductName] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [query, setQuery] = useState('');
  const [datalist, setDatalist] = useState([]);
  const [isActive, setActive] = useState(true);

  const ToggleClass = () => {
    setActive(false);
  };

  const dispatch = useDispatch();

    const handleChange = useCallback(event => {
    setQuery(event.target.value);
    }, []);
  
useEffect(() => {
    if (query !== '') {
      fetchProducts(query);    }
}, [0, query]);
  
  const token = useSelector(authSelectors.getToken);
  const header = `Authorization: Bearer ${token}`;

  const fetchProducts = async searchQuery => {
    try {
      const { data } = await axios.get(
        `https://obscure-shelf-16384.herokuapp.com/api/products?input=${searchQuery}`,
        { headers: { header } });
      setDatalist(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
    const onChangeProductWeight = useCallback(event => {
    setProductWeight(event.target.value);
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();
    setProductName(query);
    dispatch(diaryOperations.addProduct({ query, productWeight }));
    resetInput();
       setActive(true);
  };

  const resetInput = () => {
    setQuery('');
    setProductWeight('');
  };

  return (
    <div>
      <form className={isMobile && isActive  ?  `${styles.addProductFormSleep}`:`${styles.addProductForm}`} onSubmit={handleFormSubmit}>
        <DebounceInput
          minLength={2}
          debounceTimeout={1000}
          className={styles.inputAddProductFormName}
          id="productName"
          name="productName"
          type="productName"
          value={productName}
          onChange={handleChange}
          placeholder="Введите название продукта"
          required
          list="products-for-add"
          autoComplete="off"
        />

        <datalist id="products-for-add">
          {datalist.map(({ title }) => (
            <option value={title.ru} key={uuidv4()}></option>
          ))}
        </datalist>

        <input
          className={styles.inputAddProductFormAmount}
          id="grams"
          name="productWeight"
          type="grams"
          value={productWeight}
          onChange={onChangeProductWeight}
          placeholder="Граммы"
          required
          autoComplete="off"
        />
        {isMobile ? (
          <button type="submit" className={styles.buttonAddProductMobile}>
            Добавить
          </button>
        ) : (
          <button type="submit" className={styles.buttonAddProduct}>
            +
          </button>
        )}
      </form>

      {isMobile ? (
        <button
          className={styles.buttonToForm}
          type="button"
          onClick={ToggleClass}
        >
          +
        </button>
      ) : null}
    </div>
  );
}

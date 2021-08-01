import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { diaryOperations } from '../../redux/diary';
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

import styles from '../DiaryAddProductForm/DiaryAddProductForm.module.css';

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA2NjhhZDg2YWRmYTAwMWNlNjM3MjAiLCJlbWFpbCI6ImxhaW1hMUB1a3IubmV0IiwiaWF0IjoxNjI3ODA5OTY1fQ.l02q3sziD6ZLNIfDY6wflKfTsAQWDwo9aRGUbwttZg0';

const isMobile = window.screen.width < 768;

export default function DiaryAddProductForm() {
  const [productName, setProductName] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [query, setQuery] = useState('');
  const [datalist, setDatalist] = useState([]);
  const dispatch = useDispatch();

  const ifProductAccess = datalist.find(elem => elem.title.ru === query);

  const handleFormSubmit = event => {
    event.preventDefault();
    setProductName(query);
    if (ifProductAccess) {
      dispatch(diaryOperations.addProduct({ query, productWeight }));
      resetInput();
    } else alert('Пожалуйста, введите название продукта из списка');
  };

  useEffect(() => {
    if (query !== '') {
      fetchProducts(query);
    }
  }, [query]);

  const fetchProducts = async searchQuery => {
    try {
      const { data } = await axios.get(
        `https://obscure-shelf-16384.herokuapp.com/api/products?input=${searchQuery}`,
      );
      setDatalist(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeProductWeight = useCallback(event => {
    setProductWeight(event.target.value);
  }, []);

  const handleChange = useCallback(event => {
    setQuery(event.target.value);
  }, []);

  const resetInput = () => {
    setProductWeight('');
    setQuery('');
    setProductName('');
  };

  return (
    <div>
      <form className={styles.addProductForm} onSubmit={handleFormSubmit}>
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
      <p>gbdgd</p>
    </div>
  );
}

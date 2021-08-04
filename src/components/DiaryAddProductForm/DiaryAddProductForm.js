import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { diaryOperations } from '../../redux/diary';
import { diarySelectors } from '../../redux/diary';
import { v4 as uuidv4 } from 'uuid';

import { DebounceInput } from 'react-debounce-input';

import styles from '../DiaryAddProductForm/DiaryAddProductForm.module.css';

const isMobile = window.screen.width < 768;

export default function DiaryAddProductForm() {
  const [productWeight, setProductWeight] = useState('');
  const [query, setQuery] = useState('');
  const [isActive, setActive] = useState(true);
  const searchList = useSelector(diarySelectors.getSearchList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query !== '') {
      dispatch(diaryOperations.fetchProductsList(query ));
    }
  }, [0, query]);

  const ToggleClass = () => {
    setActive(false);
  };

  const ToggleClassBack = () => {
    setActive(true);
  };

  const ifProductAccess = searchList.find(elem => elem.title.ru === query);

  const handleChange = useCallback(event => {
    setQuery(event.target.value);
  }, []);

  const onChangeProductWeight = useCallback(event => {
    setProductWeight(event.target.value);
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();
    if (ifProductAccess) {
      dispatch(diaryOperations.addProduct({ query, productWeight }));
      resetInput();
      setActive(true);
    } else alert('Пожалуйста, введите название продукта из списка');
    
  };

  const resetInput = () => {
    setProductWeight('');
    setQuery('');
    
  };


  return (
    <div>
      <form
        className={
          isMobile && isActive
            ? `${styles.addProductFormSleep}`
            : `${styles.addProductForm}`
        }
        onSubmit={handleFormSubmit}
      >
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          className={styles.inputAddProductFormName}
          id="productName"
          name="productName"
          type="productName"
          value={query}
          onChange={handleChange}
          placeholder="Введите название продукта"
          required
          list="products-for-add"
          autoComplete="off"
        />

        <datalist id="products-for-add">
          {searchList.map(({ title }) => (
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

      {isMobile && isActive ? (
        <button
          className={styles.buttonToForm}
          type="button"
          onClick={ToggleClass}
        >
          +
        </button>
      ) : null}

      {!isActive ? (
        <button
          className={styles.buttonComeBack}
          
          type="button"
          onClick={ToggleClassBack}
        ><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8" stroke="black" strokeWidth="2"/>
</svg>

        </button>
      ) : null}
    </div>
  );
}

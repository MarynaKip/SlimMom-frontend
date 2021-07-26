import React from 'react';
import { useFormik } from 'formik';
import styles from '../DiaryAddProductForm/DiaryAddProductForm.module.css';

const DiaryAddProductForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      productName: '',
      grams: Number,
    },
    onSubmit: (values) => {
      //понять что значит эта строка
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={styles.addProductForm}>
        <input
          className={styles.inputAddProductFormName}
          id='productName'
          name='productName'
          type='productName'
          onChange={formik.handleChange}
          value={formik.values.productName}
          placeholder='Введите название продукта'
          required
          list='products-for-add'
          autocomplete='off'
        />

        <datalist id='products-for-add'>
          <option value=''></option>
          <option>gre4ka</option>
          <option value='jaico'></option>
          <option value='salo'></option>
          <option value='moloko'></option> 
          <option value='grechka'></option>
        </datalist>
        {/* <Field name="color" component="select">
   <option value="red">Red</option>
   <option value="green">Green</option>
   <option value="blue">Blue</option>
 </Field> */}
        <input
          className={styles.inputAddProductFormAmount}
          id='grams'
          name='grams'
          type='grams'
          onChange={formik.handleChange}
          value={formik.values.grams}
          placeholder='Граммы'
          required
          autocomplete='off'
        />

        <button type='submit' className={styles.buttonAddProduct}>
          +
        </button>
      </form>
    </div>
  );
};

export default DiaryAddProductForm;


import React from 'react';
import { useFormik } from 'formik';

const DiaryAddProductForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      productName: '',
      grams:Number,
    },
    onSubmit: values => {
      //понять что значит эта строка
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (<div>
    <p>Это форма добавить продукт. Отображается только в сегодня</p>
    <form onSubmit={formik.handleSubmit}>
      <input
        id="productName"
        name="productName"
        type="productName"
        onChange={formik.handleChange}
        value={formik.values.productName}
        placeholder = "Введите название продукта"
        required
      />
       <input
        id="grams"
        name="grams"
        type="grams"
        onChange={formik.handleChange}
        value={formik.values.grams}
        placeholder = "Граммы"
        required
      />


      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default DiaryAddProductForm;

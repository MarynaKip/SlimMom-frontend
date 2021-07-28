<<<<<<< Updated upstream
// import React from 'react';
// import { Formik } from 'formik';
 
//  const DailyCaloriesForm = () => (
//    <div>
//      <h1>Узнай свою суточную норму калорий</h1>
//      <Formik
//       initialValues={{ name: ' ' }}
//        onSubmit={(values, actions) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            actions.setSubmitting(false);
//          }, 1000);
//   }}
//      >
//        {props => (
//          <form onSubmit={props.handleSubmit}>
//            <span>Рост</span>
//            <input
//              type="number"
//              onChange={props.handleChange}
//              onBlur={props.handleBlur}
//             //  value={props.values.name}
//              name="name"
//            />
//            {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
           
         

//            <span>Рост</span>
//            <input
//              type="number"
//              onChange={props.handleChange}
//              onBlur={props.handleBlur}
//             //  value={props.values.name}
//              name="name"
//            />
//            {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
//            <button type="submit">Похудеть</button>
//            </form>
//        )}
//      </Formik>
//    </div>
//  );

//  export default DailyCaloriesForm;

import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  dailyForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  error: {
    color: 'red',
  },
});

const initialState = {
  height: '', //рост
  age: '', //возвраст
  currentWeight: '', //текущий вес
  desiredWeight: '', //желаемый вес
  bloodType: '', // группа крови
};

const DailyCaloriesForm = () => {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const { height, age, currentWeight, desiredWeight, bloodType } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newItem = {
    //   height: Number(height),
    //   age: Number(age),
    //   currentWeight: Number(currentWeight),
    //   desiredWeight: Number(desiredWeight),
    //   bloodType:Number(bloodType),
    // };

    // onSubmit(newItem);
    setState(initialState);
    setError('');
  };

  
//10 * вес + 6.25 * рост - 5 * возраст - 161 - 10 * (вес - желаемый вес)
  
const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <div>
    <h1>Просчитай свою суточную норму калорий</h1>
    <form className={classes.dailyForm} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Рост *</span>
        <input
          type="number"
          className={classes.input}
          value={height}
          name="height"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Возраст * </span>
        <input
          type="number"
          className={classes.input}
          value={age}
          name="age"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Текущий вес * </span>
        <input
          type="number"
          className={classes.input}
          value={currentWeight}
          name="currentWeight"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Желаемый вес * </span>
        <input
          type="number"
          className={classes.input}
          value={desiredWeight}
          name="desiredWeight"
          onChange={handleChange}
        />
      </label>

        <label>
          <span>Группа крови * </span>
          <input
            type="radio"
            name="bloodType"
            value="1"
            checked={bloodType === '1'}
            onChange={handleChange}
          />
          <span>1</span>
        </label>
        <label>
          <input
            type="radio"
            name="bloodType"
            value="2"
            checked={bloodType === '2'}
            onChange={handleChange}
          />
           <span>2</span>
        </label>
        <label>
          <input
            type="radio"
            name="bloodType"
            value= '3'
            checked={bloodType === '3'}
            onChange={handleChange}
          />
          <span>3</span>
        </label>
        <label>
          <input
            type="radio"
            name="bloodType"
            value= '4'
            checked={bloodType === '4'}
            onChange={handleChange}
          />
          <span>4</span>
        </label>
      {error && <p className={classes.error}>{error}</p>}

      <button type="submit">Похудеть</button>
    </form>
    </div>
  );
};

export default DailyCaloriesForm;

=======
import React from 'react';
import { useFormik } from 'formik';
 
 const DailyCaloriesForm = () => {
   const formik = useFormik({
     initialValues: {
      height: '', //рост
      age: '', //возвраст
      currentWeight: '', //текущий вес
      desiredWeight: '', //желаемый вес
      bloodType: '', // группа крови
     },

     onSubmit: values => {
       //alert(JSON.stringify(values, null, 2));
       console.log('Form data', values)
     },
   });
   
   return (
     
     <form onSubmit={formik.handleSubmit}>
       <h1>Просчитай свою суточную норму калорий</h1>
       <label htmlFor="height">Рост * </label>
       <input
         id="height"
         name="height"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.height}
       />
       <label htmlFor="age">Возраст * </label>
       <input
         id="age"
         name="age"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.age}
       />
       <label htmlFor="currentWeight">Текущий вес * </label>
       <input
         id="currentWeight"
         name="currentWeight"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.currentWeight}
       />
      <label htmlFor="desiredWeight">Желаемый вес * </label>
       <input
         id="desiredWeight"
         name="desiredWeight"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.desiredWeight}
       />
      <label>
           <span>Группа крови * </span>
          <input
            id = "bloodType"
            name="bloodType"
            type="radio"
            value="1"
            checked ={"bloodType" === '1'}
            onChange={formik.handleChange}
           />
           <span>1</span>
           
           <input
            id = "bloodType"
            name="bloodType"
            type="radio"
            value="2"
            checked={"bloodType" === '2'}
            onChange={formik.handleChange}
           />
           <span>2</span>

           <input
            id = "bloodType"
            name="bloodType"
            type="radio"
            value="3"
            checked={"bloodType" === '3'}
            onChange={formik.handleChange}
           />
           <span>3</span>

           <input
            id = "bloodType"
            name="bloodType"
            type="radio"
            value="4"
            checked={"bloodType" === '4'}
            onChange={formik.handleChange}
           />
           <span>4</span>
</label>
       <button type="submit">Похудеть</button>
     </form>
     
   );
   
 };

 //10 * вес + 6.25 * рост - 5 * возраст - 161 - 10 * (вес - желаемый вес)
 
 export default DailyCaloriesForm;
>>>>>>> Stashed changes

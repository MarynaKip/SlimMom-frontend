import axios from 'axios';
import calculatorActions from './calculator-actions';
const path = 'https://obscure-shelf-16384.herokuapp.com';

axios.defaults.baseURL = path;

const getDailyRate = dataFromCalculator => async dispatch => {
  dispatch(calculatorActions.getDailyRateRequest(dataFromCalculator));

  try {
    console.log(dataFromCalculator);
    const response = await axios.post('/api/daily/rate', dataFromCalculator);
    console.log(response.data);
    dispatch(calculatorActions.getDailyRateSuccess(response.data));
  } catch (error) {
    dispatch(calculatorActions.getDailyRateError(error.message));
  }
};

const getDailyRatePrivate = dataFromCalculator => async (
  dispatch,
  getState,
) => {
  if (!dataFromCalculator) {
    const {
      userInfo: {
        height: persistedHeight,
        currentWeight: persistedCurrentWeight,
        desiredWeight: persistedDesiredWeight,
        bloodType: persistedBloodType,
        age: persistedAge,
      },
    } = getState();

    if (
      !persistedHeight ||
      !persistedCurrentWeight ||
      !persistedDesiredWeight ||
      !persistedBloodType ||
      !persistedAge
    ) {
      return;
    }
    const dataForRequest = {
      height: persistedHeight,
      currentWeight: persistedCurrentWeight,
      desiredWeight: persistedDesiredWeight,
      bloodType: persistedBloodType,
      age: persistedAge,
    };
  }

  const dataForRequest = dataFromCalculator;

  dispatch(calculatorActions.getDailyRateRequest());

  try {
    const response = await axios.post('/api/daily/privateRate', dataForRequest);
    console.log(response.data);
    dispatch(calculatorActions.getDailyRateSuccess(response.data));
  } catch (error) {
    dispatch(calculatorActions.getDailyRateError(error.message));
  }
};

export default { getDailyRate, getDailyRatePrivate };

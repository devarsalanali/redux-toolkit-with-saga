import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from '../slices/catSlice';

function* workGetCatsFetch() {
  try {
    const response = yield call(fetch, 'https://cataas.com/api/cats?tags=cute');
    const formattedCats = yield response.json();
    const slicedFormattedCats = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(slicedFormattedCats));
  } catch (error) {
    console.error(error.message);
  }
}

function* catSaga() {
  yield takeEvery('cat/getCatsFetch', workGetCatsFetch);
}

export default catSaga;

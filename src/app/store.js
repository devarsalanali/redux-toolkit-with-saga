import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import catReducer from './slices/catSlice';
import catSaga from './sagas/catSaga';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cat: catReducer,
  },
  middleware: () => [saga],
});
saga.run(catSaga);

export default store;

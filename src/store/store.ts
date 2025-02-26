import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducers'; // Your root reducer

const store = configureStore({
  reducer: rootReducer,  // Define your root reducer
  // No need to add thunk explicitly as it's included by default
});

export default store;

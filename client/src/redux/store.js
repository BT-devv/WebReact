import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    // Định nghĩa các reducers của bạn ở đây
    auth: authReducer
  },
});

export default store;

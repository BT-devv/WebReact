import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'
import cartReducer from './cartReducer';

const store = configureStore({
  reducer: {
    // Định nghĩa các reducers của bạn ở đây
    auth: authReducer,
    cart: cartReducer
  },
});

export default store;

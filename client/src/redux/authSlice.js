import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login:{
        currenUser:null,
        isFleching:false,
        error:false,
    },
    register:{
      success:false,
      isFleching:false,
      error:false,
    }

  },
  reducers: {
    loginStart: (state) =>{
        state.login.isFleching = true
    },
    loginSuccess: (state,actions) =>{
        state.login.isFleching = true
        state.login.currenUser = actions.payload
        state.login.error = false
    },
    loginFailed: (state,actions) =>{
        state.login.isFleching = false
        state.login.error = true
    },

    regisStart: (state) =>{
      state.register.isFleching = true
    },
    regisSuccess: (state) =>{
      state.register.isFleching = true
      state.register.success = true
      state.register.error = false
    },
    regisFailed: (state,actions) =>{
      state.register.isFleching = false
      state.register.error = true
    },
  },
});

export const { loginStart, loginSuccess, loginFailed,regisStart, regisSuccess, regisFailed } = authSlice.actions;
export default authSlice.reducer;

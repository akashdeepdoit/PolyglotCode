
import { createSlice } from '@reduxjs/toolkit';

export const codeSlice = createSlice({
  name: 'code',
  initialState: {
    code: '',
    language: ''
  },
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  },
});

export const { setCode,setLanguage } = codeSlice.actions;



export default codeSlice.reducer;


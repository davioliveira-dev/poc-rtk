import { createSlice } from '@reduxjs/toolkit';
import customTypes from './types';

const initialState = {
  isLoading: false,
  hasErrors: false,
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: customTypes,
});

export const types = usersSlice.actions;
export default usersSlice.reducer;

// TODO: Using Redux instead of Context API
import { configureStore, createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense(state, action) {
      state.push(action.payload);
    },
    setExpenses(state, action) {
      return action.payload.reverse();
    },
    updateExpense(state, action) {
      const index = state.findIndex((expense) => expense.id === action.payload.id);
      if (index >= 0) {
        state[index] = { ...state[index], ...action.payload.data };
      }
    },
    deleteExpense(state, action) {
      return state.filter((expense) => expense.id !== action.payload);
    },
  },
});
export const { addExpense, setExpenses, updateExpense, deleteExpense } = expensesSlice.actions;

const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
  },
});
export default store;

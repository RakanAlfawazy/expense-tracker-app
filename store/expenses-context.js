import { createContext, useReducer } from 'react';

// Create a context for managing expenses
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

// Reducer function to handle different expense-related actions
function expensesReducer(state, action) {
  switch (action.type) {
    // Add a new expense
    case 'ADD':
      return [action.payload, ...state];
    // Set the expenses
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    // Update an existing expense
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    // Delete an expense
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    // Default case returns the current state
    default:
      return state;
  }
}

// Provider component to manage the expenses state and provide it to child components
function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  // Function to add a new expense
  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  // Function to set the expenses
  function setExpenses(expenses) {
    dispatch({ type: 'SET', payload: expenses });
  }

  // Function to delete an expense by id
  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  // Function to update an expense by id
  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  // Value to be provided to context consumers
  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContextProvider;

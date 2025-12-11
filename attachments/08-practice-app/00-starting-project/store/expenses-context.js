import { createContext, useReducer } from 'react';

export const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    date: new Date('2021-12-19'),
    amount: 59.99
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    date: new Date('2021-12-19'),
    amount: 18.59
  },
  {
    id: 'e3',
    description: 'Some bananas',
    date: new Date('2021-12-01'),
    amount: 5.99
  },
  {
    id: 'e4',
    description: 'A book',
    date: new Date('2022-02-19'),
    amount: 14.99
  },
  {
    id: 'e5',
    description: 'Another book',
    date: new Date('2022-02-18'),
    amount: 18.59
  }
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {}
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toExponential.toString();

      return [{ ...action.payload }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case 'DELETE':
      return state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );

    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

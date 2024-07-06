import { useContext } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import ExpensesStatistics from '../components/ExpensesOutput/ExpensesStatistics';


function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    // Component to display all expenses
    <>

      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod="Total"
        fallbackText="No registered expenses found!"
      />
      <ExpensesStatistics expenses={expensesCtx.expenses} />
    </>

  );
}
export default AllExpenses;

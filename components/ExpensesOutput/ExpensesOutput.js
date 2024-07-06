import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  // Display fallback text if there are no expenses
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  // Display the list of expenses if there are any
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      {/* Display the summary of expenses for the given period */}
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {/* Display the content, either the list of expenses or the fallback text */}
      {content}
    </View>
  );
}
export default ExpensesOutput;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white', 
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 32, 
  },
});

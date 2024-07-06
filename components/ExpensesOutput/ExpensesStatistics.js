import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ExpensesStatistics({ expenses }) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const averageExpense = totalExpenses ? (totalExpenses / expenses.length).toFixed(2) : '0.00';
  const highestExpense = totalExpenses ? Math.max(...expenses.map(expense => expense.amount)).toFixed(2) : '0.00';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics</Text>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Total Expenses:</Text>
        <Text style={styles.statValue}>${totalExpenses.toFixed(2)}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Average Expense:</Text>
        <Text style={styles.statValue}>${averageExpense}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Highest Expense:</Text>
        <Text style={styles.statValue}>${highestExpense}</Text>
      </View>
    </View>
  );
}
export default ExpensesStatistics;



const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary700,
    borderRadius: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary50,
    marginBottom: 16,
    textAlign: 'center',
  },
  stat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 16,
    color: GlobalStyles.colors.primary50,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.accent500,
  },
});

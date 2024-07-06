import { FlatList } from 'react-native';

import ExpenseItem from './ExpenseItem';

// Function to render each expense item in the list
function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses} // Array of expenses to display
      renderItem={renderExpenseItem} // Function to render each item
      keyExtractor={(item) => item.id} // Unique key for each item
    />
  );
}
export default ExpensesList;

import { Text, View, StyleSheet } from 'react-native';

function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.date}>{periodName}</Text>
      <Text style={styles.amountText}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 8,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4
  },
  amountText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  date: {
    color: 'black' // change this
  }
});

import { View, Text, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

function ExpensesOutput({ expenses, expensesPeriod, amount, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary
        expenses={expenses}
        periodName={expensesPeriod}
        amount={amount}
      />

      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32
  }
});

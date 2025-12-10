import { View, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

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

function ExpensesOutput({ expenses, expensesPeriod, amount }) {
  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodName={expensesPeriod}
        amount={amount}
      />

      <ExpensesList expenses={DUMMY_EXPENSES} />
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
  }
});

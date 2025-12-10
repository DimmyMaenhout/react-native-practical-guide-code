import { Text } from 'react-native';
import { View, FlatList } from 'react-native';

function renderExpenseItem(itemData) {
  const item = {
    description: itemData.item.title,
    date: itemData.item.date,
    price: itemData.item.price
  };
  //   return <ExpenseItem {...item} />;

  return <Text>{itemData.item.description}</Text>;
}

function ExpensesList({ expenses }) {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

export default ExpensesList;

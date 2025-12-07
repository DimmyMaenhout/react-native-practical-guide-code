import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

// Besides auto-completion, the StyleSheet object aslo provides validation.
// If you would use invalid style properties or values, you would get an error/warning.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});

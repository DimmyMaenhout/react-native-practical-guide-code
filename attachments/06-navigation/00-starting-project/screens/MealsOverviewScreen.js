import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native';
import MealItem from '../components/MealItem';
// We kunnen ook een hook gebruiken ipv de via de properties
// import { useRoute } from '@react-navigation/native';

// MealsOverviewScreen is geregistreerd als een scherm en krijgt daarom automatisch een navigation en route property
function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

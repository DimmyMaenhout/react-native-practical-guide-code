import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

// MealsOverviewScreen is geregistreerd als een scherm en krijgt daarom automatisch een navigation en route property
function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
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

import { Text, StyleSheet, Platform } from 'react-native';

// Because this file is Title.android.js it will only be used for Android!
// We need to make sure that were we use it, the import doens't say "android" or "ios" because it will do that automatically based on the platform

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}),
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%'
  }
});

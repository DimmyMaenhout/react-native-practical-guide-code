// import { Text, StyleSheet, Platform } from 'react-native';

// THIS FILE SHOWS HOW TO HANDLE PLATFORM SPECIFIC CODE FOR IOS AND ANDROID. THE OTHER FILES THAT HAVE TITLE.<PLATFORM>.JS ARE ANOTHER WAY OF DOING THIS IN SEPARAT FILES!

// function Title({ children }) {
//   return <Text style={styles.title}>{children}</Text>;
// }

// export default Title;

// const styles = StyleSheet.create({
//   title: {
//     fontFamily: 'open-sans-bold',
//     fontSize: 24,
//     // fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     // borderWidth: Platform.OS === "android" ? 2 : 0,
//     borderWidth: Platform.select({ios: 0, android: 2}),
//     borderColor: 'white',
//     padding: 12,
//     maxWidth: "80%",
//   },
// });

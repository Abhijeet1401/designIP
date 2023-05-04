import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Design from './Src/Components/Design';
//import Design4 from './Src/Components/Design4';
import Design5 from './Src/Components/Design5';
// import Design2 from './Src/Components/Design2';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <Design/> */}
      {/* <Design2/> */}
      {/* <Design4/> */}
      <Design5/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

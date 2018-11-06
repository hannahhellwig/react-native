import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hej!</Text>
//         <Text>Hej!</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'pink',
//   },
// });

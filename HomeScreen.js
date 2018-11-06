import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Hej</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")} />
      </View>
    );
  }
}

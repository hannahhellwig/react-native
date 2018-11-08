import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomColor: '#fff',
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Button"
        color="#000"
      />
    ),
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center', }}>
      <ImageBackground
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%', }}
        resizeMode='cover'
        source={require('./assets/image.jpg')}>

        <Text
        style={{
          fontSize: 24,
        }}>
          Home Screen
        </Text>
        <Button
          color="#841584"
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")} />
        <Button
          color="#841584"
          title="Go to Camera"
          onPress={() => this.props.navigation.navigate("Camera")} />
          </ImageBackground>
      </View>
    );
  }
}

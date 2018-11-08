import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomColor: '#fff'
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Button"
        color="#000"
      />
    ),
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            fontSize: 12,
            // color: "#fff",
            width: 150,
          }}>
            Slender mongoose
            Galerella sanguinea
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

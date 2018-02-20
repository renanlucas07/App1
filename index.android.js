import React from 'react';
import {ReactNative, Text, Button, View, AppRegistry} from 'react-native';

const genRandom = () => {
  var random = 'Num: \n'+Math.floor(10*Math.random());
  alert(random);
};

const App = function() {
  return (
    <View>
      <Text>Meu primeiro APP</Text>
      <Button title="Caguei" onPress={genRandom} />
    </View>
  );
};

AppRegistry.registerComponent('app1',() => App); 
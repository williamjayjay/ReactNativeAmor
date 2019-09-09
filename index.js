import React, { Component } from 'react';
import { View, Text} from 'react-native';



import styles from './styles';

export default class src extends Component {
  render() {
    return (
      <View style = {{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundColor: '#F21B'}}>
          <View >
            <Text>Meu Nome: William</Text>
            <Text>Meu amor: *****</Text>
          </View>
          <View>
          <Text></Text>
            <Text>Minha cidade: RJ</Text>
            <Text>A cidade dela: **</Text>
          
          </View>

         
      </View>

      
    );
  }
}
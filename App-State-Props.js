/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View, Text,TextInput,
StyleSheet
} from 'react-native';

import Title from './Title'

export default class App extends Component{
  state={
    counter: 12,
    title: ''
  }
handleClick(){
  this.setState ( {
    counter: this.state.counter + 10

  })
}
handleChangetitle(text){
this.setState({
  title:text
}
)
}

render() {
    return (
      <View >
       <Title 
       text={this.state.title} 
       counter={this.state.counter}
       person={{
         name: 'Budi Waluyo',
         address: 'Jakarta'
       }}
       />
        <Text  style={{fontSize: 50 }} onPress={()=> this.handleClick()}>
          {this.state.title}
        </Text>
        <TextInput onChangeText={(text)=> {this.handleChangetitle(text)}} />
      </View>
    );
  }
}

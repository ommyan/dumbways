/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View, Text,TextInput,
StyleSheet,Image
} from 'react-native';

export default class App extends Component{

render() {
    return (
      <View style = {style.container}>
          <View style={style.header}>
           <Image style={style.logo} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'}}/>
          </View>
          <View style ={style.body}>
                <View style = { style.cardTop}>
                        <Text> Card Top Card Top Card Top Card Top Card Top Card Top</Text>
                </View>
                <View style = { style.card}>

                </View>
          </View>
      </View>
    );
  }
}

const style= StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'red',
    justifyContent: 'center',
    flex: 1
  },
  body: {
    flex:9
  },
  logo: {
    height: 60,
    width:300
  },
  cardTop: {
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#bebebe',
    flex: 2,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#bebebe',
    flex: 2,
    margin: 20
  }

})
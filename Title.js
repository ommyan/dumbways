import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Title extends Component {
render(){
    return(
        <View>
        <Text  style={{fontSize: 50 }}>
        {this.props.text} 
        {this.props.counter}
        {this.props.person.name}
      </Text>
      </View>
    )
}
}
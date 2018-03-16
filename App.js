import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home'
import Detail from './screens/Detail'
import Products from './screens/Products'
import ProductsDetail from './screens/ProductsDetail'

const RootStack = StackNavigator({
 /*  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home Page"
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: "Detail Page"
    }
  }, */
  Products: {
    screen: Products,
    navigationOptions: {
      title: "Product Page"
    }
  },
  ProductsDetail: {
    screen: ProductsDetail,
    navigationOptions: {
      title: "Product Detail Page"
    }
  }
})
export default class CardListExample extends Component {
  render() {
    return <RootStack/>
  }
}
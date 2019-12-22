import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import PlanetImage from './assets/planet.png';
import PlanetImage1 from './assets/planet1.png';
import PlanetImage2 from './assets/planet2.png';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {id: 1, name: 'Planet', img: PlanetImage},
        {id: 2, name: 'Planet1', img: PlanetImage1},
        {id: 3, name: 'Planet2', img: PlanetImage2}
      ]
    }
  }

  render() {
    let {categories} = this.state;

    return (
      <View>
        <ScrollView style={{paddingLeft: 16, paddingRight: 16}}>
          {
            categories.map(category => (
              <CategoryListItem key={category.id} category={category} />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

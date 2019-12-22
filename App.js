import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import PlanetImage from './assets/planet.png';
import PlanetImage1 from './assets/planet1.png';
import PlanetImage2 from './assets/planet2.png';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CategoryListItem title="A" img={PlanetImage} />
        <CategoryListItem title="B" img={PlanetImage1} />
        <CategoryListItem title="C" img={PlanetImage2} />
        <CategoryListItem title="C" img={PlanetImage2} />
        <CategoryListItem title="C" img={PlanetImage2} />
        <CategoryListItem title="C" img={PlanetImage2} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

import React from 'react'
import {
    Image,
    Text,
    View,
} from 'react-native'
import PlanetImage from '../assets/planet.png';

export default function CategoryListItem() {
    return <View>
        <Text>Category</Text>
        <Image source={PlanetImage} />
    </View>
}
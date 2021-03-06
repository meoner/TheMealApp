import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {mealListStyle} from '../styles/mealListPageStyle';

function MealList({data, onSelect}) {
  return (
    <View style={{backgroundColor:'white'}}>
      <View style={mealListStyle.container}>
        <TouchableOpacity
          style={mealListStyle.containerButton}
          onPress={onSelect}>
          <View style={mealListStyle.containerImage}>
            <Image
              style={mealListStyle.image}
              resizeMode="cover"
              source={{uri: data.strMealThumb}}
            />
          </View>
        </TouchableOpacity>

        <View style={mealListStyle.containerText}>
          <Text style={mealListStyle.text}>{data.strMeal}</Text>
        </View>
      </View>
    </View>
  );
}

export {MealList};

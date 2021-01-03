import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {categoryListStyle} from '../styles/categoryPageStyle';

function CategoryList({data, onSelect}) {
  return (
    <View style={categoryListStyle.container}>
      <TouchableOpacity
        style={categoryListStyle.containerButton}
        onPress={onSelect}>
        <ImageBackground
          resizeMode="contain"
          source={{uri: data.strCategoryThumb}}
          style={categoryListStyle.categoryImage}>
          <Text style={categoryListStyle.categoryText}>{data.strCategory}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

export {CategoryList};

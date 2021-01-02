import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {searchBarStyle} from '../styles/componentStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchBar() {
  return (
    <View style={searchBarStyle.container}>
      <View style={searchBarStyle.inputContainer}>
        <TextInput placeholder="What do you eat today ?" />
      </View>
      <TouchableOpacity style={searchBarStyle.iconContainer}>
        <Icon name="magnify" color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
}

export {SearchBar};

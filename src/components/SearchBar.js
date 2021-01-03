import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {searchBarStyle} from '../styles/categoryPageStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';

function SearchBar(props) {
  const [searchedValue, setSearchedValue] = useState('');
  return (
    <View style={searchBarStyle.container}>
      <View style={searchBarStyle.inputContainer}>
        <TextInput
          placeholder="What do you eat today ?"
          onChangeText={(val) => setSearchedValue(val)}
        />
      </View>
      <TouchableOpacity style={searchBarStyle.iconContainer}>
        <Icon
          name="magnify"
          color="white"
          size={25}
          onPress={() => props.onSearch(searchedValue)}
        />
      </TouchableOpacity>
    </View>
  );
}

export {SearchBar};

import React from 'react';
import {View, Text} from 'react-native';
import {headerTextStyle} from '../styles/categoryPageStyle';

function HeaderText() {
  return (
    <View style={headerTextStyle.container}>
      <Text style={headerTextStyle.textStyle}>Categories</Text>
    </View>
  );
}

export {HeaderText};

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {FoodList} from '../components';

function FilterCategoryPage({route}) {
  const {strId} = route.params;
  const [filterCategory, setFilterCategory] = useState({});
  const filterCategoryUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strId}`;
  async function fetchData() {
    const response = await axios.get(filterCategoryUrl);
    setFilterCategory(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const renderCategory = ({item}) => <Text>{item.strMeal}</Text>;

  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={(item) => item.idCategory}
        data={filterCategory.meals}
        renderItem={renderCategory}
      />
    </View>
  );
}

export {FilterCategoryPage};

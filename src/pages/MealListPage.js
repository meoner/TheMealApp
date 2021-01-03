import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {MealList} from '../components';

function MealListPage({route, navigation}) {
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

  const renderMeal = ({item}) => (
    <MealList
      data={item}
      onSelect={() => navigation.navigate('Meal', {idMeal: item.idMeal})}
    />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={(item) => item.idMeal}
        data={filterCategory.meals}
        renderItem={renderMeal}
      />
    </View>
  );
}

export {MealListPage};

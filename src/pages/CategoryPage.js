import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {CategoryList, SearchBar, HeaderText} from '../components';

const categoryUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function CategoryPage(props) {
  const [category, setCategory] = useState({});
  async function fetchData() {
    const response = await axios.get(categoryUrl);
    setCategory(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderCategory = ({item}) => (
    <CategoryList
      data={item}
      onSelect={() =>
        props.navigation.navigate('FilterCategory', {strId: item.strCategory})
      }
    />
  );

  function goSearchPage(val) {}

  return (
    <View style={{flex: 1}}>
      <SearchBar onSearch={goSearchPage} />
      <HeaderText />
      <FlatList
        horizontal={true}
        keyExtractor={(item) => item.idCategory}
        data={category.categories}
        renderItem={renderCategory}
      />
    </View>
  );
}

export {CategoryPage};

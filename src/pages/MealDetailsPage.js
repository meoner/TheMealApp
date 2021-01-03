import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function MealDetailsPage({route}) {
  const {idMeal} = route.params;
  const [mealDetail, setMealDetail] = useState({});
  const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  async function fetchData() {
    const response = await axios.get(mealUrl);
    setMealDetail(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <ScrollView>
        <Text
          style={{
            alignSelf: 'center',
            fontFamily: 'XanhMono-Italic',
            fontSize: 26,
            marginVertical: 10,
          }}>
          {mealDetail.meals[0].strMeal}
        </Text>
        <Image
          style={{height: 320, width: 320, alignSelf: 'center'}}
          resizeMode="contain"
          source={{uri: mealDetail.meals[0].strMealThumb}}
        />
        <TouchableOpacity
          onPress={() => Linking.openURL(mealDetail.meals[0].strYoutube)}
          style={{
            backgroundColor: 'red',
            top: -20,
            height: 40,
            width: 80,
            borderRadius: 10,
          }}>
          <Icon
            name="play"
            size={35}
            color="white"
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'flex-start',
            marginLeft: 15,
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Recipe
        </Text>
        <Text style={{marginHorizontal:15, fontSize:15}}>{mealDetail.meals[0].strInstructions}</Text>
      </ScrollView>
    </View>
  );
}

export {MealDetailsPage};

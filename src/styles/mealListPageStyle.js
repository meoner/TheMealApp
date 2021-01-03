import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const mealListStyle = StyleSheet.create({
  container: {
    margin: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerButton: {
    elevation: 2,
  },

  containerImage: {
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    height: deviceSize.height * 0.2,
  },
  image: {
    height: deviceSize.height * 0.2,
    width: deviceSize.width * 0.35,
  },
  containerText: {
    height: deviceSize.height * 0.28,
    width: deviceSize.width * 0.65,
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 10,
    left: -50,
    justifyContent: 'center',
  },
  text: {
    marginLeft: 55,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export {mealListStyle};

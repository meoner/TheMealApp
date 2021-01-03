import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const categoryListStyle = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 10,
    marginHorizontal: 3,
    height: deviceSize.height * 0.2,
  },
  //toucableopacity
  containerButton: {
    backgroundColor: '#94b4a4',
    borderRadius: 10,
  },
  categoryImage: {
    height: deviceSize.height * 0.2,
    width: deviceSize.width * 0.3,
    backgroundColor: '#d9e4dd',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    color: 'black',
  },
});

const searchBarStyle = StyleSheet.create({
  container: {
    height: 50,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#039be5',
    justifyContent: 'center',
    padding: 10,
    width: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputContainer: {
    padding: 5,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
});

const headerTextStyle = StyleSheet.create({
  container: {
    margin: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export {categoryListStyle, searchBarStyle, headerTextStyle};

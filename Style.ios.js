import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 400,
    height: 700
  },

  listView: {
    backgroundColor: 'white',
    width: 100,
    borderRadius: 30,
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'steelblue',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 0.7
  },

  titleHolder: {
    width: 150
  },

  directionHolder: {
    marginTop: 30,
    width: 150
  },

  directionText: {
    fontSize: 6
  },

  listText: {
    fontSize: 10,
    textAlign: 'center'
  },

  parkListHolder: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center'
  },

  parkDetailsHolder: {
    marginTop: 10
  },

  header: {
    flex: 0.05,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 40,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    shadowColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: 'skyblue',
    width: 200
  },

  backButton: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 1.0,
    padding: 10,
    width: 100
  }
});

export default styles;
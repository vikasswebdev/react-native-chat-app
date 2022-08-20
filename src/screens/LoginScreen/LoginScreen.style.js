import {theme} from '../../theme';
import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.07,
  },
  logo: {
    width: deviceWidth * 0.2,
    height: deviceWidth * 0.5,
    aspectRatio: 2,
    resizeMode: 'contain',
  },
  titleView: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  titleText: {
    width: '100%',
    // backgroundColor: 'red',
    textAlign: 'center',
    fontSize: theme['font-size-large'],
    fontWeight: theme['font-medium'],
  },

  contentView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formView: {
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 25,
    width: '90%',
  },
  inputText: {
    fontSize: theme['font-size-medium'],
    fontWeight: theme['font-medium'],
    color: theme['text-basic-color-1'],
    marginVertical: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: theme['color-gray'],
    borderWidth: 1,
    borderRadius: 4,
    fontSize: theme['font-size-medium'],
    paddingHorizontal: 8,
    color: theme['text-basic-color-1'],
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    backgroundColor: theme['color-primary-500'],
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

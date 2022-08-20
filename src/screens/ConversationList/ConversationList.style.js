import {theme} from '../../theme';
import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  tabActiveTitle: {
    fontWeight: theme['font-regular'],
    fontSize: theme['font-size-small'],
  },
  tabNotActiveTitle: {
    fontWeight: theme['font-regular'],
    fontSize: theme['font-size-small'],
  },
  tabContainer: {
    flexDirection: 'row',
  },

  tabClick: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

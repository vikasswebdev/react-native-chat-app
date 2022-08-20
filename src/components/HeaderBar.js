import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../theme';

const HeaderBar = ({title, showLeftButton, alignment, showRightButton}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      {showLeftButton && (
        <TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="funnel-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
      {showRightButton && (
        <TouchableOpacity activeOpacity={0.5}>
          <Feather name="more-horizontal" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    marginVertical: 8,
    fontSize: theme['font-size-large'],
    fontWeight: theme['font-bold'],
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
});

export default HeaderBar;

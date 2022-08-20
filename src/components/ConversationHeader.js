import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Text,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ConversationHeader = ({navigation, route}) => {
  return (
    <View style={styles.header}>
      <View style={{flex: 0.1}} activeOpacity={0.5}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          android_ripple={{
            color: '#ccc',
            borderless: true,
          }}>
          <Ionicons name="chevron-back" size={27} color="black" />
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <Pressable
          android_ripple={{
            color: '#ccc',
            borderless: true,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center'}}
            activeOpacity={0.5}>
            <FontAwesome5 name="user-circle" size={25} color="black" />
            <Text style={{marginLeft: 10, fontSize: 18}}>
              {route.params.number}
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={{flex: 0}} activeOpacity={0.5}>
        <Pressable
          android_ripple={{
            color: '#ccc',
            borderless: true,
          }}>
          <Entypo name="dots-three-vertical" size={18} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default ConversationHeader;

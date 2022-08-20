import {
  View,
  Text,
  Platform,
  PermissionsAndroid,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPhoneNumber} from '../../../actions/conversation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Item = ({item, navigation}) => (
  <Pressable
    android_ripple={{color: '#80808021'}}
    onPress={() => {
      navigation.navigate('Conversation', {
        number: item.phoneNumbers[0].number,
      });
    }}>
    <View style={styles.item}>
      <View style={{flex: 0.3}}>
        <FontAwesome5 name="user-circle" size={32} />
      </View>
      <View style={{flex: 1}}>
        <Text>{item.phoneNumbers[0].number}</Text>
      </View>
      <View style={{flex: 0}}>
        <Text>1</Text>
      </View>
    </View>
  </Pressable>
);

const MineScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const getPhoneNumbers = useSelector(state => state.getPhoneNumber);

  const {loading, numbers, error} = getPhoneNumbers;

  console.log('numbers', numbers);

  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      console.log('ios');
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contact Permission',
            message: 'Contact Permission is required to read contacts',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          dispatch(getPhoneNumber());
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  useEffect(() => {
    checkPermission();
  }, [dispatch]);

  const renderitem = ({item}) => <Item navigation={navigation} item={item} />;

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {loading ? (
        <ActivityIndicator size="large" color="balck" />
      ) : (
        <FlatList
          data={numbers}
          showsVerticalScrollIndicator={false}
          renderItem={renderitem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#80808021',
    borderBottomWidth: 1,
  },
});

export default MineScreen;

import {
  View,
  StyleSheet,
  SectionList,
  ImageBackground,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import HeaderBar from '../../components/HeaderBar';
import ConversationHeader from '../../components/ConversationHeader';
import images from '../../constants/images';
import ReplyBox from './Components/ReplyBox';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Conversation = ({navigation, route}) => {
  const renderItem = ({item}) => <Item title={item} />;

  return (
    <KeyboardAvoidingView style={styles.screen}>
      <ConversationHeader route={route} navigation={navigation} />
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={images.whatsAppBackground}>
          <View style={styles.chatContainer}>
            <View style={styles.chatView}>
              <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                style={styles.sectionList}
              />
            </View>
            <ReplyBox />
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#d9d7ce54',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  sectionList: {
    height: '94%',
  },
});

export default Conversation;

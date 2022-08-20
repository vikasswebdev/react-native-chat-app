import React, {useEffect} from 'react';
import {View, SafeAreaView, Text, StatusBar} from 'react-native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ConversationListScreen from './src/screens/ConversationList/ConversationList';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  useEffect(() => {
    Ionicons.loadFont();
    Feather.loadFont();
  }, []);

  return (
    <>
      <Provider store={store}>
        <ConversationListScreen />
      </Provider>
    </>
  );
};

export default App;

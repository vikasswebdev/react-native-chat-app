import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './ConversationList.style';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from '../../navigation/TopTab';

const ConversationList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const ConversationListScreen = ConversationList;
export default ConversationListScreen;

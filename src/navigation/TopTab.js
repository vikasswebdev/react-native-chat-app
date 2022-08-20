import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MineScreen from '../screens/ConversationList/TabConversation/MineScreen';
import UnAssignedScreen from '../screens/ConversationList/TabConversation/UnAssignedScreen';
import All from '../screens/ConversationList/TabConversation/All';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Conversation from '../screens/Conversation/Conversation';
import HeaderBar from '../components/HeaderBar';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const TopTab = () => {
  return (
    <>
      <HeaderBar
        title="Converse"
        showRightButton={true}
        // onRightPress={openFilter}
        buttonType="menu"
      />
      <Tab.Navigator>
        <Tab.Screen
          name="Mine"
          options={{
            title: 'All',
          }}
          component={MineScreen}
        />
        <Tab.Screen
          name="UnAssignedScreen"
          options={{
            title: 'Chats',
          }}
          component={UnAssignedScreen}
        />
        <Tab.Screen name="Group" component={All} />
      </Tab.Navigator>
    </>
  );
};

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Tab"
        component={TopTab}
      />
      <Stack.Screen
        options={({route}) => ({
          animation: 'slide_from_right',
          // title: `${route.params.number}`,
          headerShown: false,
        })}
        name="Conversation"
        component={Conversation}
      />
    </Stack.Navigator>
  );
};

export default TopTab;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import Login from '../Profile/Login_register/Login'
import Register from '../Profile/Login_register/Register';
import Forget from '../Profile/Login_register/Forget';
import HomeDetails from '../Home/HomeDetails';
import Message from '../Message/Message';
import Chat from '../Message/Chat';
import VideoChat from '../Message/VideoChat';
import Notification from '../Notification/Notification';
import EditProfile from '../Profile/Profile_view/EditProfile';
import ProfileView from '../Profile/Profile_view/ProfileView';
import Review from '../Profile/Profile_view/Review';
import EditSocialLink from '../Profile/Profile_view/EditSocialLink';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="TabNavigator">
    <Stack.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
    <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }}/>
    <Stack.Screen name="HomeDetails" component={HomeDetails} options={{ headerShown: false }}/>
    <Stack.Screen name="Message" component={Message} options={{ headerShown: false }}/>
    <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>
    <Stack.Screen name="VideoChat" component={VideoChat} options={{ headerShown: false }}/>
    <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
    <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
    <Stack.Screen name="ProfileView" component={ProfileView} options={{ headerShown: false }}/>
    <Stack.Screen name="Review" component={Review} options={{ headerShown: false }}/>
    <Stack.Screen name="EditSocialLink" component={EditSocialLink} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

export default StackNavigator;

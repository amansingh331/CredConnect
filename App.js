import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

import Home from './src/Home/Home';
import Profile from './src/Profile/Profile';
import Help from './src/Help/Help';
import Work from './src/Work/Work';
import Login from './src/Profile/Login_register/Login';
import Register from './src/Profile/Login_register/Register';
import Forget from './src/Profile/Login_register/Forget';
import HomeDetails from './src/Home/HomeDetails';
import ProfileView from './src/Profile/Profile_view/ProfileView';
import Notification from './src/Notification/Notification';
import Message from './src/Message/Message';
import Review from './src/Profile/Profile_view/Review';
import color from './src/Constant/color';
import EditProfile from './src/Profile/Profile_view/EditProfile';
import Chat from './src/Message/Chat';
import VideoChat from './src/Message/VideoChat';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="#242020" barStyle="light-content" />
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Work') {
            iconName = focused ? 'briefcase-sharp' : 'briefcase-outline';
          } else if (route.name === 'Help') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#000',
          height: 50,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        showLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
          headerStyle: { backgroundColor: '#242020' },
          headerTintColor: 'white',
        }}
      />
      <Tab.Screen name="Work" component={Work} options={{ headerShown: false }} />
      <Tab.Screen name="Help" component={Help} options={{headerShown: false}} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  </View>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProfileView" component={ProfileView} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }}/>
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
      <Stack.Screen name="Message" component={Message} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeDetails" component={HomeDetails} options={{headerShown: false}}/>
      <Stack.Screen name="Review" component={Review} options={{headerShown: false}}/>
      <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}}/>
      <Stack.Screen name="chat" component={Chat} options={{headerShown: false}}/>
      <Stack.Screen name="VideoChat" component={VideoChat} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundcolor,
  },
});

export default App;

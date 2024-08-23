import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Help from '../Help/Help';
import Work from '../Work/Work';

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
      <Tab.Screen name="Help" component={Help} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242020',
  },
});

export default TabNavigator;

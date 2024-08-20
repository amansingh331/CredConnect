import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Process from '../../Process/process';

export default function AuthCheck() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userExists = await Process.checkUser();
      if (userExists) {
        navigation.navigate('ProfileView');
      } else {
        navigation.navigate('Login');
      }
    };

    checkLoginStatus();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

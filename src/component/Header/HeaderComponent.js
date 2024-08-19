import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import color from '../../Constant/color'

const Header = ({ title }) => {
  const navigation = useNavigation();
  const [backiconColor, setbackIconColor] = useState('white');
  const [notificationiconColor, setnotificationIconColor] = useState('white');
  const [messageiconColor, setmessageIconColor] = useState('white');
  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        onPressIn={() => setbackIconColor('gray')}
        onPressOut={() => setbackIconColor('white')}
      >
        <Icon name="chevron-back" size={24} color={backiconColor} />
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder='Search Mentor'
        placeholderTextColor='gray'
        autoCorrect={false}
        autoCapitalize='none' />
      <Pressable
        onPress={() => navigation.navigate('Notification')}
        onPressIn={() => setnotificationIconColor('gray')}
        onPressOut={() => setnotificationIconColor('white')}
      >
        <Icon name="notifications-outline" size={24} color={notificationiconColor} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Message')}
        onPressIn={() => setmessageIconColor('gray')}
        onPressOut={() => setmessageIconColor('white')}
      >
        <AntIcon name="message1" size={24} color={messageiconColor} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:color.headercolor,
    paddingHorizontal: 10,
  },
  input: {
    height: 35,
    width:'60%',
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    backgroundColor:'black',
    textAlign: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;

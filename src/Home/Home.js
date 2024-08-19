import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Alert, Pressable, Dimensions, Text } from 'react-native';
import Card from '../component/cardDesign';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Homedata from '../Constant/HomeData';
import color from '../Constant/color';

const App = () => {

  const navigation = useNavigation();

  const [notificationiconColor, setnotificationIconColor] = useState('white');
  const [messageiconColor, setmessageIconColor] = useState('white');

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = 160;
  const spacing = 10;
  const numColumns = Math.floor(screenWidth / (cardWidth + spacing));


  

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerleft}>
          <Text style={styles.appname}>asdf</Text>
        </View>
        <View style={styles.headerright}>
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
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.grid}>
          <Card data={Homedata}/>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: color.backgroundcolor,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop:10,
    marginBottom:10,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.headercolor,
    paddingHorizontal: 10,
  },
  headerleft: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  headerright: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  input: {
    height: 40,
    width: '60%',
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appname: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: '',
  }
});

export default App;

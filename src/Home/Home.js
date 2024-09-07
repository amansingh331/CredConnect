import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Alert, Pressable, Dimensions, Text, ActivityIndicator } from 'react-native';
import Card from '../component/cardDesign';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import color from '../Constant/color';
import Process from '../Process/process';

const App = () => {

  const navigation = useNavigation();
  const [notificationiconColor, setnotificationIconColor] = useState('white');
  const [messageiconColor, setmessageIconColor] = useState('white');

  const handleNotification = async (data) => {
    try {
      const IsUserExist = await Process.checkUser();
      if (IsUserExist) {
        navigation.navigate('Notification');
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  const handleMessage = async (data) => {
    try {
      const IsUserExist = await Process.checkUser();
      if (IsUserExist) {
        navigation.navigate('Message')
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const HomeData = async () => {
        try {
          const HomeData = await Process.getHomeData();
          setData(HomeData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      HomeData();
    }, [navigation])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={color.Buttoncolor} />
      </View>
    );
  }

  if (!data) {
    return null;
  }
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerleft}>
          <Text style={styles.appname}>asdf</Text>
        </View>
        <View style={styles.headerright}>
          <Pressable
            onPress={handleNotification}
            onPressIn={() => setnotificationIconColor('gray')}
            onPressOut={() => setnotificationIconColor('white')}
          >
            <Icon name="notifications-outline" size={24} color={notificationiconColor} />
          </Pressable>
          <Pressable
            onPress={handleMessage}
            onPressIn={() => setmessageIconColor('gray')}
            onPressOut={() => setmessageIconColor('white')}
          >
            <AntIcon name="message1" size={24} color={messageiconColor} />
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.grid}>
          <Card data={data}/>
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
    fontFamily: 'PlaywriteCU-Regular',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.backgroundcolor,
  },
});

export default App;

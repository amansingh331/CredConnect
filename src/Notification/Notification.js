import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import color from '../Constant/color';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Notification = ({ route })=>{
  const [backiconColor, setbackIconColor] = useState('white');
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          onPressIn={() => setbackIconColor('gray')}
          onPressOut={() => setbackIconColor('white')}
        >
          <Icon name="chevron-back" size={24} color={backiconColor} />
        </Pressable>
        <Text style={styles.headerTitle}>Notifictaion</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
          <View style={styles.reviewCard}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.name}>name</Text>
              <Text style={styles.message}>comment</Text>
            </View>
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: color.backgroundcolor,
  },
  header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: color.headercolor,
      elevation: 5,
  },
  headerTitle: {
      color: 'white',
      fontSize: 17,
      marginLeft: 10,
  },
  scrollContainer: {
      paddingHorizontal: 0,
      marginTop:10,
  },
  reviewCard: {
      flexDirection: 'row',
      padding: 15,
      backgroundColor: '#1e1e1e',
      borderRighttWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth:1,
      borderColor: '#333333',
  },
  profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 15,
  },
  reviewTextContainer: {
      flex: 1,
  },
  name: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  },
  ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 3,
  },
  daysAgo: {
      color: 'gray',
      fontSize: 12,
      marginLeft: 10,
  },
  message: {
      color: 'gray',
      fontSize: 10,
  },
});

export default Notification;
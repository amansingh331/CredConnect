import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../Constant/color';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const Message = ({ route })=>{
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
        <Text style={styles.headerTitle}>Message</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write a message"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>

          <Pressable onPress={()=>navigation.navigate('chat')}>
            <View style={styles.reviewCard}>
              <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }}  style={styles.profileImage} />
              <View style={styles.reviewTextContainer}>
                <Text style={styles.name}>name</Text>
                <Text style={styles.message}>comment</Text>
              </View>
            </View>
          </Pressable>
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
      padding: 10,
      backgroundColor: '#1e1e1e',
      borderRighttWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth:1,
      borderColor: '#333333',
  },
  profileImage: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginRight: 15,
  },
  reviewTextContainer: {
      flex: 1,
  },
  name: {
      color: 'white',
      fontSize: 18,
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
  searchContainer:{
    marginBottom:10,
    marginHorizontal:15,
  },
  searchBox: {
    height: 45,
    width:'100%',
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    backgroundColor:'black',
    textAlign: 'start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom:10,
  },
  input: {
    flex: 1,
    color: 'white',
    backgroundColor: '#1F1F1F',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sendButton: {
    marginLeft: 8,
    padding: 13,
    backgroundColor: '#1F1F1F',
    borderRadius: 50,
  },
});

export default Message;
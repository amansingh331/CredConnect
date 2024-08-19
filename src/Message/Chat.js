import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
    const navigation = useNavigation();
    const [backiconColor, setbackIconColor] = useState('white');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          onPressIn={() => setbackIconColor('gray')}
          onPressOut={() => setbackIconColor('white')}
        >
          <Ionicons name="chevron-back" size={24} color={backiconColor}/>
        </Pressable>
        <Image source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} style={styles.profileImage} />
        <Text style={styles.userName}>Chetan Saini</Text>
        <View style={styles.actionIcons}>
          <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('VideoChat')}>
            <MaterialIcons name="call" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('VideoChat')}>
            <MaterialIcons name="videocam" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.messagesContainer}>
        <Text>welcone</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write a message"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark background color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    padding: 10,
  },
  backButton: {
    padding: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  actionIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginHorizontal:5,
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

export default ChatScreen;

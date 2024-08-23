import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../Constant/color';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const Message = ({ route }) => {
  const [backiconColor, setbackIconColor] = useState('white');
  const [pressedCards, setPressedCards] = useState([]);
  const navigation = useNavigation();

  const name = "John Doe";
  const message = "This is a sample comment.";

  const handlePressIn = (index) => {
    setPressedCards(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handlePressOut = (index) => {
    setPressedCards(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

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

        {[...Array(5)].map((_, index) => (
          <Pressable
            key={index}
            onPress={() => navigation.navigate('Chat')}
            onPressIn={() => handlePressIn(index)}
            onPressOut={() => handlePressOut(index)}
            style={[
              styles.reviewCard,
              pressedCards[index] ? styles.pressed : null,
              { backgroundColor: pressedCards[index] ? '#333333' : '#1e1e1e' },
            ]}
          >
            <View style={styles.reviewCardContent}>
              <Image 
                source={{ uri: 'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg' }} 
                style={styles.profileImage} 
              />
              <View style={styles.reviewTextContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.message}>{message}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

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
    marginTop: 10,
  },
  reviewCard: {
    flexDirection: 'row',
    padding: 10,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  reviewCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  reviewTextContainer: {
    flex: 1,
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  message: {
    color: 'gray',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 10,
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

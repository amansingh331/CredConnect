import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 40) / 2;

const Card = ({ title, image, description, backgroundColor, rating, location, callPrice, videoPrice, chatPrice }) => {
  return (
    <View style={[styles.card, { backgroundColor, width: cardWidth }]}>
      <View style={styles.header}>
        <Icon name="star" size={15} color="orange" />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <Image 
        source={{ uri: image }} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.subtitle}>{description}</Text>
      <View style={styles.locationContainer}>
        <Icon name="location-outline" size={16} color="gray" />
        <Text style={styles.locationText}>{location}</Text>
      </View>
      <View style={styles.actionContainer}>
        <Pressable style={styles.actionButton}>
          <Icon name="call" size={20} color="green" />
          <Text style={styles.actionText}>{callPrice}</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Icon name="videocam" size={20} color="dodgerblue" />
          <Text style={styles.actionText}>{videoPrice}</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Icon name="chatbubble" size={20} color="orange" />
          <Text style={styles.actionText}>{chatPrice}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    margin: 5, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  ratingText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 11,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginVertical: 10,
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'gray',
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationText: {
    color: 'gray',
    marginLeft: 5,
    fontSize: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: 'gray',
    fontSize: 10,
    marginTop: 2,
  },
});

export default Card;

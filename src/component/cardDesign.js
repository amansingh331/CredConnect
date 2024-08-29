import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import img from '../assets/home.png';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 40 - 10) / 3;

const Card = ({ data }) => {
  const navigation = useNavigation();
  
  const handleCardPress = (id) => {
    navigation.navigate('HomeDetails', { itemId: id });
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          onPress={() => handleCardPress(item.DomainId)}
          style={[styles.cardContainer, { marginRight: (index + 1) % 3 === 0 ? 0 : 10 }]} 
        >
          <CardDesign
            title={item.DomainName}
            image={item.DomainProfilePic}
            description={item.DomainDescription}
            backgroundColor={item.DomainBackgroundColor}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const CardDesign = ({ title, image, description, backgroundColor }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
  },
  cardContainer: {
    marginBottom: 10,
  },
  card: {
    width: cardWidth,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 180,
    borderRadius: 10,
    padding: 5,
    paddingBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 90,
    borderRadius: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: 9,
    textAlign: 'center',
    marginTop: 5,
    color: 'white',
  },
});

export default Card;

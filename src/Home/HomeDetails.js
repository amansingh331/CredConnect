import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Card from '../component/HomeCardDesign';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import HeaderComponent from '../../src/component/Header/HeaderComponent'
import HomeDetailsData from '../Constant/HomeDetailsData';
import color from '../Constant/color';

const CardList = ({ route}) => {
  const id = route.params.itemId;
  const navigation = useNavigation();
  const handleCardPress = (data) => {
    navigation.navigate('ProfileView', {data:data});
  };
  return (
    <>
    <HeaderComponent/>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      {HomeDetailsData.map((item, index) => (
      <TouchableOpacity onPress={() => handleCardPress(item)}>
        <Card 
          title={item.first_name + " " + item.last_name}
          image={item.image}
          description={item.description}
          backgroundColor={item.backgroundColor}
          rating={item.rating}
          location={item.location}
          callPrice={item.callPrice}
          videoPrice={item.videoPrice}
          chatPrice={item.chatPrice}
        />
      </TouchableOpacity>
      ))}
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
    backgroundColor: color.backgroundcolor,
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'row', 
    flexWrap: 'wrap',   
    justifyContent: 'space-between', 
  },
});

export default CardList;

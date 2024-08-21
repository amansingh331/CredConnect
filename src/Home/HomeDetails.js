import React, { useCallback, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Card from '../component/HomeCardDesign';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import HeaderComponent from '../../src/component/Header/HeaderComponent';
import color from '../Constant/color';
import Process from '../Process/process';

const CardList = ({ route }) => {
  const id = route.params.itemId;
  const navigation = useNavigation();
  const [HomeDetailsData, setHomeDetailsData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCardPress = async (data) => {
    try {
      const userid = await Process.getUserId();
      if (userid === data.userid) {
        navigation.navigate('Profile');
      } else {
        navigation.navigate('ProfileView', { data: data.userid});
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchHomeDetailsData = async () => {
        try {
          const data = await Process.getHomeDetailsData(id);
          setHomeDetailsData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchHomeDetailsData();
    }, [id])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={color.Buttoncolor} />
      </View>
    );
  }

  if (!HomeDetailsData) {
    return null;
  }

  return (
    <>
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {HomeDetailsData.map((item) => (
            <TouchableOpacity key={item.userid} onPress={() => handleCardPress(item)}>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.backgroundcolor,
  },
});

export default CardList;

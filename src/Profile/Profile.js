import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import HeaderComponent from '../component/Header/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Process from '../Process/process';
import color from '../Constant/color';

export default function Profile() {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const checkLoginStatus = async () => {
        try {
          const userExists = await Process.checkUser();
          if (!userExists) {
            navigation.navigate('Login');
            return;
          }
          const userid = await Process.getUserId();
          const tempData = await Process.getUserData(userid);
          setData(tempData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      checkLoginStatus();
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
    <View style={styles.maincontainer}>
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Pressable style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
            <Icon2 name="account-edit" size={24} color="white" />
          </Pressable>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: data.ProfilePic }}
              style={styles.profileImage}
            />
            <Text style={styles.name}>{data.Fname + " " + data.Lname}</Text>
            <Text style={styles.title}>{data.Position}</Text>
            <View style={styles.ratingRow}>
              <Icon name="star" size={16} color="orange" />
              <Text style={styles.ratingText}>{data.AvgRating}</Text>
              <Text style={{ color: 'white', marginLeft: 12 }}>|</Text>
              <Text onPress={() => navigation.navigate('Review', { data: data.Fname })} style={styles.reviewText}>{data.NoOfReview} reviews</Text>
            </View>
            <View style={styles.locationRow}>
            <Text style={styles.locationText}>{data.Experience + '+ Years,'}</Text>
              <Text style={styles.locationText}>{data.CurrentCompany + ' '}</Text>
              
              <Icon name="location-outline" size={16} color="gray" />
              <Text style={styles.locationText}>{data.Location}</Text>
            </View>
            <Text style={styles.description}>
              {data.Bio}
            </Text>
          </View>
          <View style={styles.actionButtons}>
            <Pressable style={styles.actionButton}>
              <Icon name="call" size={24} color="green" />
              <Text style={styles.buttonText}>{"₹"+ data.CallPrice + "/hr"}</Text>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Icon name="videocam" size={24} color="dodgerblue" />
              <Text style={styles.buttonText}>{"₹"+ data.VideoPrice + "/hr"}</Text>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Icon name="chatbubble" size={24} color="orange" />
              <Text style={styles.buttonText}>{"₹"+ data.ChatPrice + "/hr"}</Text>
            </Pressable>
          </View>

          <View style={styles.bookingSection}>
            <View style={styles.availability}>
              <Text style={styles.availabilityText}>Available at</Text>
              <Text style={styles.timeText}>1:00 PM - Today</Text>
            </View>
            <Pressable style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book now</Text>
            </Pressable>
          </View>
          <View style={styles.container1}>
            <View style={styles.dateContainer}>
              <Text style={styles.joinedText}>JOINED ON</Text>
              <Text style={styles.dateText}>
                {data.DateOfJoined
                  ? (() => {
                    const date = new Date(data.DateOfJoined);
                    const month = date.toLocaleString('en-US', { month: 'short' });
                    const year = date.toLocaleString('en-US', { year: 'numeric' });
                    return `${month}, ${year}`;
                  })()
                  : ''}
              </Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.iconsContainer1}>
              <Icon name="logo-linkedin" size={24} color="white" />
              <Icon name="logo-instagram" size={24} color="white" />
              <Icon name="logo-youtube" size={24} color="white" />
              <Icon name="logo-facebook" size={24} color="white" />
              <Icon name="logo-twitter" size={24} color="white" />
            </View>
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer:{
    flex: 1,
    backgroundColor: color.backgroundcolor,
  },
  scrollContainer: {
    backgroundColor: color.backgroundcolor,
    paddingVertical: 10,
  },
  container: {
    padding: 15,
    backgroundColor: color.backgroundcolor,
    position: 'relative',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 12,
  },
  reviewText: {
    color: 'gray',
    marginLeft: 10,
    fontSize: 14,
    textDecorationLine: 'underline'
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationText: {
    color: 'gray',
    marginLeft: 5,
    fontSize: 14,
  },
  description: {
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    fontSize: 13,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
    fontSize: 14,
  },
  bookingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 7,
    height: 55,
    backgroundColor: '#333',
  },
  availability: {
    flexDirection: 'column',
  },
  availabilityText: {
    color: 'gray',
    fontSize: 12,
  },
  timeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bookButtonText: {
    color: color.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },

  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  joinedText: {
    color: '#8A8A8A',
    fontSize: 12,
    letterSpacing: 1.2,
  },
  dateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#555',
    marginHorizontal: 20,
  },
  iconsContainer1: {
    paddingRight: 20,
    padding: 10,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.backgroundcolor,
  },
});

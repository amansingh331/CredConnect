import React, { useCallback, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, Image, Text, Pressable, Linking, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../../component/Header/HeaderComponent';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import color from '../../Constant/color';
import Process from '../../Process/process'

const ProfileCard = ({route}) => {
  const navigation = useNavigation();
  const userid = route.params.data;
  const datalinkedin = 1;
  const openURLInBrowser = (url) => {
    Linking.openURL(url).catch((err) =>
      Alert.alert("Error", "Unable to open the URL")
    );
  };

  const handleVideoChat = async (data) => {
    try {
      const IsUserExist = await Process.checkUser();
      if (IsUserExist) {
        navigation.navigate('VideoChat')
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  const handleAudioChat = async (data) => {
    try {
      const IsUserExist = await Process.checkUser();
      if (IsUserExist) {
        navigation.navigate('VideoChat')
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  const handleMessageChat = async (data) => {
    try {
      const IsUserExist = await Process.checkUser();
      if (IsUserExist) {
        navigation.navigate('Chat')
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);
  useFocusEffect(
    useCallback(() => {
      const fetchProfileData = async () => {
        try {
          const Profiledata = await Process.getEditProfileData(userid);
          setdata(Profiledata);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProfileData();
    }, [userid])
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
          <View style={styles.profileSection}>
            <Image
              source={{ uri: data.ProfilePic }}
              style={styles.profileImage}
            />
            <Text style={styles.name}>{data.Fname + " " + data.Lname}</Text>
            <Text style={styles.title}>{data?.Position || ''}</Text>
            <View style={styles.ratingRow}>
              <Icon name="star" size={16} color="orange" />
              <Text style={styles.ratingText}>{data?.AvgRating || 0}</Text>
              <Text style={{color:'white', marginLeft:12}}>|</Text>
              <Text onPress={() => navigation.navigate('Review', {Fname:data.Fname, userid:data.UserId})} style={styles.reviewText}>{data?.NoOfReview || 0} reviews</Text>
            </View>
            <View style={styles.locationRow}>
              <Text style={styles.locationText}>{data.Experience + '+ Years,'}</Text>
              <Text style={styles.locationText}>{data.CurrentCompany + ' '}</Text>
              <Icon name="location-outline" size={16} color="gray" />
              <Text style={styles.locationText}>{data.Location}</Text>
            </View>
            <Text style={styles.description}>
              {data?.Bio || ''}
            </Text>
          </View>
          <View style={styles.actionButtons}>
            <Pressable style={styles.actionButton} >
              <Icon name="call" size={24} color="green" onPress={handleAudioChat}/>
              <Text style={styles.buttonText}>{`₹${data.CallPrice || 0}/hr`}</Text>
            </Pressable>
            <Pressable style={styles.actionButton} onPress={handleVideoChat}>
              <Icon name="videocam" size={24} color="dodgerblue" />
              <Text style={styles.buttonText}>{`₹${data.VideoPrice || 0}/hr`}</Text>
            </Pressable>
            <Pressable style={styles.actionButton} onPress={handleMessageChat}>
              <Icon name="chatbubble" size={24} color="orange" />
              <Text style={styles.buttonText}>{`₹${data.ChatPrice || 0}/hr`}</Text>
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
              <Text style={styles.dateText}>Jul, 2024</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.iconsContainer1}>
              {data.Linkedin ? (
                <Pressable onPress={() => openURLInBrowser(data.Linkedin)}>
                  <Icon name="logo-linkedin" size={24} color="white" />
                </Pressable>
              ) : (
                <Icon name="logo-linkedin" size={24} color="gray" />
              )}
              {data.Instagram ? (
                <Pressable onPress={() => openURLInBrowser(data.Instagram)}>
                  <Icon name="logo-instagram" size={24} color="white" />
                </Pressable>
              ) : (
                <Icon name="logo-instagram" size={24} color="gray" />
              )}
              {data.Youtube ? (
                <Pressable onPress={() => openURLInBrowser(data.Youtube)}>
                  <Icon name="logo-youtube" size={24} color="white" />
                </Pressable>
              ) : (
                <Icon name="logo-youtube" size={24} color="gray" />
              )}
              {data.Facebook ? (
                <Pressable onPress={() => openURLInBrowser(data.Facebook)}>
                  <Icon name="logo-facebook" size={24} color="white" />
                </Pressable>
              ) : (
                <Icon name="logo-facebook" size={24} color="gray" />
              )}
              {data.Twitter ? (
                <Pressable onPress={() => openURLInBrowser(data.Twitter)}>
                  <Icon name="logo-twitter" size={24} color="white" />
                </Pressable>
              ) : (
                <Icon name="logo-twitter" size={24} color="gray" />
              )}
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
    textDecorationLine:'underline'
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
    fontSize:13,
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
    paddingRight:20,
    padding:10,
    width:'70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
});

export default ProfileCard;

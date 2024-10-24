import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import color from '../../Constant/color';
import * as ImagePicker from 'expo-image-picker';
import Process from '../../Process/process';
import DomainPicker from '../../component/domainPicker'

export default function PersonalDetailsScreen() {
  const navigation = useNavigation();
  const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [currentCompany, setCurrentCompany] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [audioPrice, setAudioPrice] = useState('100');
  const [videoPrice, setVideoPrice] = useState('250');
  const [chatPrice, setChatPrice] = useState('20');
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backiconColor, setbackIconColor] = useState('white');
  const [isEditingAudio, setIsEditingAudio] = useState(false);
  const [isEditingVideo, setIsEditingVideo] = useState(false);
  const [isEditingChat, setIsEditingChat] = useState(false);
  const [userid, setuserid] = useState(null);
  const [DomainData, setDomainData] = useState('');
  const [selectedDomain, setSelectedDomain] = useState(null);


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchEditProfileData = async () => {
        try {
          const useridfe = await Process.getUserId();
          setuserid(useridfe);
          const EditProfiledata = await Process.getEditProfileData(useridfe);
          setdata(EditProfiledata);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchEditProfileData();
    }, [])
  );

  useEffect(() => {
    if(data) {
      setFirstName(data.Fname || '');
      setLastName(data.Lname || '');
      setPosition(data.Position || '');
      setExperience(data.Experience?.toString() || '');
      setCurrentCompany(data.CurrentCompany || '');
      setLocation(data.Location || '');
      setBio(data.Bio || '');
      setEmail(data.Email || '');
      setMobileNumber(data.MobileNumber || '');
      setAudioPrice(data.CallPrice || '100');
      setVideoPrice(data.VideoPrice || '250');
      setChatPrice(data.ChatPrice || '20');
      setImage(data.ProfilePic || '');
      setDomainData(data.Domain);
    }
  }, [data]);

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

  const handelUpdate = async () => {

    const SendData = {
      userid: userid,
      Fname: firstName,
      Lname: lastName,
      Position: position,
      Experience: experience,
      CurrentCompany: currentCompany,
      Location: location,
      Bio: bio,
      Email: email,
      MobileNumber: mobileNumber,
      CallPrice: audioPrice,
      VideoPrice: videoPrice,
      ChatPrice: chatPrice,
      ProfilePic: image,
      DomainId:selectedDomain,
    };
    const out = await Process.updateEditProfileData(SendData);
    if(out){
      console.warn("data updated successfully");
      navigation.goBack();
    }else{
      console.warn("failed to update!");
    }
  }

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
        <Text style={styles.headerTitle}>Edit Your Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.childcontainer}>
          <View style={styles.section}>
            <View style={styles.profileSection}>
              <View style={styles.imageWrapper}>
                <Image source={{ uri: image }} style={styles.profileImage} />
                <TouchableOpacity style={styles.iconContainer} onPress={pickImage}>
                  <MaterialIcons name="add-circle" size={28} color="#00C853" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>What's your name?</Text>
              <View style={styles.nameInputContainer}>
                <TextInput
                  style={styles.nameInput}
                  placeholder="First Name"
                  placeholderTextColor="#aaa"
                  value={firstName}
                  onChangeText={setFirstName}
                />
                <TextInput
                  style={styles.nameInput}
                  placeholder="Last Name"
                  placeholderTextColor="#aaa"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>What is your current position?</Text>
              <TextInput
                style={styles.textInput}
                placeholder="e.g., Product Manager, CA, Software Engineer, etc."
                placeholderTextColor="#aaa"
                value={position}
                onChangeText={setPosition}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Select Your Domain?</Text>
              <DomainPicker domain={DomainData} onSelect={(domainId)=>{
                setSelectedDomain(domainId);
              }} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>What is your total work experience?</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Experience in years"
                placeholderTextColor="#aaa"
                keyboardType='numeric'
                value={experience}
                onChangeText={setExperience}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>What is your current organisation?</Text>
              <TextInput
                style={styles.textInput}
                placeholder="e.g., Apple, Google, Microsoft, etc."
                placeholderTextColor="#aaa"
                value={currentCompany}
                onChangeText={setCurrentCompany}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Location</Text>
              <TextInput
                style={styles.textInput}
                placeholder="e.g., Gurgaon, Mumbai, London, Tokyo, etc."
                placeholderTextColor="#aaa"
                value={location}
                onChangeText={setLocation}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Tell us how you can help?</Text>
              <TextInput
                style={[styles.textInput, styles.multilineInput]}
                placeholder="I can help with..."
                placeholderTextColor="#aaa"
                maxLength={200}
                multiline
                value={bio}
                onChangeText={setBio}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>When is your birthday?</Text>
              <TouchableOpacity
                style={styles.dateInputContainer}
              >
                <Text style={styles.dateText}>
                  Choose data and time
                </Text>
                <FontAwesome name="calendar" size={24} color="#aaa" />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email ID</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email ID"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                editable={false}
                value={email}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.phoneInputContainer}>
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="9876543210"
                  placeholderTextColor="#aaa"
                  keyboardType="phone-pad"
                  editable={false}
                  value={mobileNumber}
                />
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Services Pricing</Text>

            <View style={styles.serviceContainer}>
              <View style={styles.iconTextContainer}>
                <FontAwesome name="phone" size={24} color="#00C853" />
                <Text style={styles.serviceTitle}>Audio Call</Text>
              </View>
              <Text style={styles.serviceDescription}>
                Set your hourly price; users will pay per minute.
              </Text>
              <View style={styles.priceContainer}>
                {isEditingAudio ? (
                  <TextInput
                    style={styles.priceInput}
                    value={audioPrice}
                    onChangeText={setAudioPrice}
                    keyboardType="numeric"
                    onBlur={() => setIsEditingAudio(false)}
                  />
                ) : (
                  <Text style={styles.priceText}>₹ {audioPrice}/hr</Text>
                )}
                <TouchableOpacity onPress={() => setIsEditingAudio(true)}>
                  <MaterialIcons name="edit" size={24} color="#00C853" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.serviceContainer}>
              <View style={styles.iconTextContainer}>
                <FontAwesome name="video-camera" size={24} color="#00C853" />
                <Text style={styles.serviceTitle}>Video Call</Text>
              </View>
              <Text style={styles.serviceDescription}>
                Set your hourly price; users will pay per minute.
              </Text>
              <View style={styles.priceContainer}>
                {isEditingVideo ? (
                  <TextInput
                    style={styles.priceInput}
                    value={videoPrice}
                    onChangeText={setVideoPrice}
                    keyboardType="numeric"
                    onBlur={() => setIsEditingVideo(false)}
                  />
                ) : (
                  <Text style={styles.priceText}>₹ {videoPrice}/hr</Text>
                )}
                <TouchableOpacity onPress={() => setIsEditingVideo(true)}>
                  <MaterialIcons name="edit" size={24} color="#00C853" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.serviceContainer}>
              <View style={styles.iconTextContainer}>
                <Entypo name="chat" size={24} color="#00C853" />
                <Text style={styles.serviceTitle}>Chat</Text>
              </View>
              <Text style={styles.serviceDescription}>
                Set price for users to initiate a chat.
              </Text>
              <View style={styles.priceContainer}>
                {isEditingChat ? (
                  <TextInput
                    style={styles.priceInput}
                    value={chatPrice}
                    onChangeText={setChatPrice}
                    keyboardType="numeric"
                    onBlur={() => setIsEditingChat(false)}
                  />
                ) : (
                  <Text style={styles.priceText}>₹ {chatPrice}/hr</Text>
                )}
                <TouchableOpacity onPress={() => setIsEditingChat(true)}>
                  <MaterialIcons name="edit" size={24} color="#00C853" />
                </TouchableOpacity>
              </View>
            </View>

          </View>
          <TouchableOpacity style={styles.updateButton} onPress={handelUpdate}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#121212',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom:10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: color.backgroundcolor,
  },
  childcontainer: {
    flex: 1,
    padding: 20,
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#00C853',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 14,
  },
  textInput: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    padding: 12,
    borderRadius: 5,
    fontSize: 14,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  nameInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    padding: 12,
    borderRadius: 5,
    fontSize: 14,
    width: '48%',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  dateText: {
    color: '#fff',
    fontSize: 14,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  countryCode: {
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    paddingVertical: 12,
  },
  serviceContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
    marginBottom:20,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceTitle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  serviceDescription: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceInput: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '50%',
  },
  updateButton: {
    backgroundColor: '#00C853',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 0,
    marginBottom:10,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#1E1E1E',
    borderRadius: 5,
    backgroundColor:'#1E1E1E',
  },
  picker: {
    height: 50,
    color: 'white',
    backgroundColor:'#1E1E1E',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.backgroundcolor,
  },
});


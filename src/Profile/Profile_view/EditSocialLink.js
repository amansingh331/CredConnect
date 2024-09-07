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
  const [data, setdata] = useState('');
  const [LinkedIn, setLinkedIn] = useState(null);
  const [Youtube, setYoutube] = useState(null);
  const [Twitter, setTwitter] = useState(null);
  const [Instagram, setInstagram] = useState(null);
  const [Facebook, setFacebook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userid, setuserid] = useState(null);
  const [backiconColor, setbackIconColor] = useState('white');


  useFocusEffect(
    useCallback(() => {
      const fetchSocialLinkData = async () => {
        try {
          const useridfe = await Process.getUserId();
          setuserid(useridfe);
          const EditSocialdata = await Process.getEditSocialData(useridfe);
          setdata(EditSocialdata);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchSocialLinkData();
    }, [])
  );

  useEffect(() => {
    if(data) {
        setLinkedIn(data.Linkedin || '');
        setYoutube(data.Youtube || '');
        setFacebook(data.Facebook || '');
        setInstagram(data.Instagram || '');
        setTwitter(data.Twitter || '');
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
      Youtube: Youtube,
      Linkedin: LinkedIn,
      Facebook: Facebook, 
      Instagram: Instagram,
      Twitter: Twitter
    };
    const out = await Process.updateEditSocialData(SendData);
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
        <Text style={styles.headerTitle}>Edit Social Link</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.childcontainer}>
          <View style={styles.section}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>LinkedIn</Text>
              <TextInput
                style={styles.textInput}
                placeholder="https://www.linkedin.com/in/UserName/"
                placeholderTextColor="#aaa"
                value={LinkedIn}
                onChangeText={setLinkedIn}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Instagram</Text>
              <TextInput
                style={styles.textInput}
                placeholder="https://www.instagram.com/UserName"
                placeholderTextColor="#aaa"
                value={Instagram}
                onChangeText={setInstagram}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>YouTube</Text>
              <TextInput
                style={styles.textInput}
                placeholder="https://www.youtube.com/"
                placeholderTextColor="#aaa"
                value={Youtube}
                onChangeText={setYoutube}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Facebook</Text>
              <TextInput
                style={styles.textInput}
                placeholder="https://www.facebook.com/UserName"
                placeholderTextColor="#aaa"
                value={Facebook}
                onChangeText={setFacebook}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Twitter</Text>
              <TextInput
                style={styles.textInput}
                placeholder="https://www.twitter.com/UserName"
                placeholderTextColor="#aaa"
                value={Twitter}
                onChangeText={setTwitter}
              />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.backgroundcolor,
  },
});


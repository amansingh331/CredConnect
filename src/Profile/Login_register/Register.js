import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View, StatusBar, ScrollView} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
const logo = require("../../assets/logo.png");
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginForm() {
  const [click, setClick] = useState(false);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState(1);
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleForget = () => {
    navigation.navigate('Forget');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#242020" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputView}>
      <TextInput
          style={styles.input}
          placeholder='FIRST NAME'
          placeholderTextColor='gray'
          value={fname}
          onChangeText={setfname}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='LAST NAME'
          placeholderTextColor='gray'
          value={lname}
          onChangeText={setlname}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='EMAIL'
          placeholderTextColor='gray'
          value={email}
          onChangeText={setemail}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='MOBILE NO' 
          placeholderTextColor='gray'
          value={mobilenumber}
          onChangeText={setmobilenumber}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='PASSWORD'
          placeholderTextColor='gray'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize='none'
        />
      </View>
      <View style={styles.radioContainer}>
          <Text style={styles.radioText}>Role:</Text>
          <View style={styles.radioButton}>
            <Pressable onPress={() => setrole(1)}>
              <Icon name={role === 1 ? 'radio-button-on' : 'radio-button-off'} size={20} color='red' />
              <Text style={styles.radioLabel}>Student</Text>
            </Pressable>
          </View>
          <View style={styles.radioButton}>
            <Pressable onPress={() => setrole(2)}>
              <Icon name={role === 2 ? 'radio-button-on' : 'radio-button-off'} size={20} color='red' />
              <Text style={styles.radioLabel}>Mentor</Text>
            </Pressable>
          </View>
        </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{ true: "green", false: "gray" }}
          />
          <Text style={styles.rememberText}>Accept Term & Conndition</Text>
        </View>
        <View>
            <Text style={styles.forgetText} onPress={handleForget}>Forgot Password?</Text>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={() => Alert.alert("Login Successfully!", "See you on my Instagram if you have questions: must_ait6")}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
        <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>

      <View style={styles.mediaIcons}>
        <Icon name="logo-google" size={40} color="red" style={styles.icon} />
        <Icon name='logo-linkedin' size={40} color={'#0077b5'} style={styles.icon} />
        <Icon name="logo-instagram" size={40} color="#E4405F" style={styles.icon} />
      </View>

      <Text style={styles.footerText}>Have an Account?<Text style={styles.signup} onPress={handleLogin}> Log In</Text></Text>
      
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
    backgroundColor: 'black',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 40,
    color: 'red',
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 7,
    color: 'white',
  },
  radioContainer: {
    width: '83%',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 7,
    height: 55,
  },
  radioText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginRight: 20,
  },
  radioLabel: {
    color: 'gray',
    marginLeft: -10,
  },
  rememberView: {
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
  switch: {
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 10,
    color: 'white',
  },
  forgetText: {
    fontSize: 11,
    color: 'red',
  },
  button: {
    backgroundColor: 'red',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: '#8B0000',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 30,
  },
  optionsText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: 'gray',
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
    marginBottom:20,
  },
  signup: {
    color: 'red',
    fontSize: 13,
  },
});

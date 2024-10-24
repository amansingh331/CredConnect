import React, { useState } from 'react';
import {Alert, ActivityIndicator, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../../../src/Constant/color'
import Process from '../../Process/process'

export default function LoginForm() {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState(1);
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    navigation.navigate('Register');
  };
  const handleForget = () => {
    navigation.navigate('Forget');
  };

  const LoginCall = async () => {
    if (username.length < 1) {
      console.warn("Username cannot be empty");
      return;
    }
    if (password.length < 1) {
      console.warn("Password cannot be empty");
      return;
    }
    setLoading(true);
    const data = {
      user:username,
      pass:password,
      role:role,
      rememberMe:click,
    }
    const movePage = await Process.Login(data);
    setLoading(false); 
    if(movePage === 1){
      navigation.navigate('Profile');
    }else{
      Alert.alert(
        'Login Failed',
        'Wrong username or password.',
        [{ text: 'OK' }]
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#242020" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder='EMAIL OR USERNAME'
            placeholderTextColor='gray'
            value={username}
            onChangeText={setUsername}
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
              <Icon name={role === 1 ? 'radio-button-on' : 'radio-button-off'} size={20} color={Color.text} />
              <Text style={styles.radioLabel}>Student</Text>
            </Pressable>
          </View>
          <View style={styles.radioButton}>
            <Pressable onPress={() => setrole(2)}>
              <Icon name={role === 2 ? 'radio-button-on' : 'radio-button-off'} size={20} color={Color.text} />
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
            <Text style={styles.rememberText}>Remember Me</Text>
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
            onPress={LoginCall}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.buttonText}>Log In</Text>
            )}
          </Pressable>
          <Text style={styles.optionsText}>OR LOGIN WITH</Text>
        </View>

        <View style={styles.mediaIcons}>
          <Icon name="logo-google" size={40} color="green" style={styles.icon} />
          <Icon name='logo-linkedin' size={40} color={'#0077b5'} style={styles.icon} />
          <Icon name="logo-instagram" size={40} color="#E4405F" style={styles.icon} />
        </View>

        <Text style={styles.footerText}>Don't Have an Account?<Text style={styles.signup} onPress={handleSignup}> Sign Up</Text></Text>
      
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
    color: Color.text,
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
    borderColor: Color.borderecolor,
    borderWidth: 1,
    borderRadius: 7,
    color: 'white',
  },
  radioContainer: {
    width: '85%',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    borderColor: Color.borderecolor,
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
    fontSize: 13,
    color: 'white',
  },
  forgetText: {
    fontSize: 11,
    color: Color.text,
  },
  button: {
    backgroundColor: Color.Buttoncolor,
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: Color.buttonpresscolor,
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
  },
  signup: {
    color: Color.Buttoncolor,
    fontSize: 13,
  },
});

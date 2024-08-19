import React, { useState, useCallback } from 'react';
import { View, Button, Modal, Text, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function Profile() {
  const p = true;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(!p);

  if (p === true) {
    navigation.navigate('Login');
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Text>asdfas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: '#242020',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
  },
  buttonContainer: {
    width: '90%',
    marginBottom: 10,
  },
});

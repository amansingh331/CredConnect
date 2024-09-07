import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import color from '../Constant/color';
import { Ionicons } from '@expo/vector-icons';  // You can use any icon library

const OptionModal = ({ modalVisible, setModalVisible }) => {
    const handleOutsidePress = () => {
        setModalVisible(false);
    };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              {/* Cross button at the top right corner */}
              <TouchableOpacity 
                style={styles.closeIcon}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>

              <Text style={styles.modalTitle}>Select your option</Text>

              <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionText}>Audio Call</Text>
                <Text style={styles.selectText}>Select</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionText}>Video Call</Text>
                <Text style={styles.selectText}>Select</Text>
              </TouchableOpacity>
              
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#1e1e1e',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
    alignItems: 'center',
    paddingBottom: 30,
    position: 'relative',  // Needed for absolute positioning of the close icon
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 17,
    color: '#fff',
    marginBottom: 15,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  optionText: {
    fontSize: 15,
    color: '#fff',
  },
  selectText: {
    fontSize: 15,
    color: color.text,
  },
});

export default OptionModal;

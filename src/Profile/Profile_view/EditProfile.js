import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function PersonalDetailsScreen() {
    const navigation = useNavigation();
    const [backiconColor, setbackIconColor] = useState('white');
    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    const handleConfirm = (selectedDate) => {
      setDate(selectedDate);
      hideDatePicker();
    };
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <View style={styles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        onPressIn={() => setbackIconColor('gray')}
        onPressOut={() => setbackIconColor('white')}
      >
        <Icon name="chevron-back" size={24} color={backiconColor} />
      </Pressable>
      <Text style={styles.headerTitle}>Edit Profile Details</Text>
      </View>

      {/* Share a Link */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Want to share a link?</Text>
        <View style={styles.linkInputContainer}>
          <TextInput
            style={styles.linkInput}
            placeholder="https://example.com/"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.displayNameInput}
            placeholder="Set display name"
            placeholderTextColor="#aaa"
            maxLength={30}
          />
        </View>
      </View>

      {/* Total Work Experience */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>What is your total work experience?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Your experience in years"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Current Organization */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>What is your current organisation?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="E.g., Google, Microsoft, etc."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Location */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Where are you based in?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="E.g., Gurgaon, Mumbai, London, Tokyo, etc."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* How can you help? */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tell us how you can help?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="I can help with"
          placeholderTextColor="#aaa"
          maxLength={200}
          multiline
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>When is your birthday?</Text>
        <TouchableOpacity style={styles.dateInputContainer} onPress={showDatePicker}>
          <TextInput
            style={styles.dateInput}
            placeholder="Choose date"
            placeholderTextColor="#aaa"
            value={date.toDateString()}
            editable={false}
          />
          <FontAwesome name="calendar" size={24} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display="default"
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 17,
    marginLeft: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  linkInputContainer: {
    flexDirection: 'row',
  },
  linkInput: {
    flex: 1,
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  displayNameInput: {
    flex: 1,
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 5,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
  },
  dateInput: {
    flex: 1,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  doneButton: {
    marginTop: 20,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

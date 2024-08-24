import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from '../component/Header/HeaderComponent';
import color from '../Constant/color';

export default function App() {
  return (
    <>
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.title}>Looking for the right expert to resolve your query? Give Us a Call!</Text>
            
            <View style={styles.step}>
              <Icon name="phone" size={20} color="#fff" style={styles.icon} />
              <View>
                <Text style={styles.stepText}>Talk to us:</Text>
                <Text style={styles.description}>Tell us your query or what you're looking for!</Text>
              </View>
            </View>

            <View style={styles.step}>
              <Icon name="person-search" size={20} color="#fff" style={styles.icon} />
              <View>
                <Text style={styles.stepText}>Get Matched:</Text>
                <Text style={styles.description}>We'll find & connect you with just the right expert.</Text>
              </View>
            </View>

            <View style={styles.step}>
              <Icon name="check-circle" size={20} color="#fff" style={styles.icon} />
              <View>
                <Text style={styles.stepText}>Resolve Your Issue:</Text>
                <Text style={styles.description}>Talk to them 1:1 to get personalised solutions asdjfka adfa.</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.callButton} onPress={()=>Linking.openURL('tel:180012345678')}>
              <Text style={styles.callButtonText}>Click to call</Text>
            </TouchableOpacity>
            <Text style={styles.supportText}>For technical, account issues, or to share feedback, write to us at <Text style={styles.email} 
            onPress={() => Linking.openURL('mailto:support@connect.in')}>support@connect.in</Text> or give us a call</Text>
          </View>
          <View style={styles.section}>
            <TouchableOpacity style={styles.optionButton}>
              <Icon name="event-available" size={30} color="#fff" />
              <Text style={styles.optionText}>Your Sessions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Icon name="local-offer" size={30} color="#fff" />
              <Text style={styles.optionText}>Generate discount code</Text>
            </TouchableOpacity>
            <View style={styles.availabilityButton}>
              <Icon name="calendar-today" size={30} color="#fff" />
              <Text style={styles.availabilityText}>Availability status</Text>
              <Text style={styles.noSlotsText}>You have not added any slots</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15,
  },
  section: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 20,
  },
  icon: {
    marginRight: 10,
  },
  stepText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  description: {
    color: '#ccc',
    fontSize: 14,
  },
  callButton: {
    backgroundColor: color.Buttoncolor,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  supportText: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  availabilityButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  availabilityText: {
    color: '#fff',
    fontSize: 16,
  },
  noSlotsText: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 5,
  },
  addButton: {
    backgroundColor: color.Buttoncolor,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

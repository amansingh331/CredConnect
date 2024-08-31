import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const DomainPicker = ({ domain, onSelect }) => {
  const [selectedDomainId, setSelectedDomainId] = useState(domain.DomainSaveId);

  useEffect(() => {
    if (onSelect) {
      onSelect(selectedDomainId);
    }
  }, [selectedDomainId]);

  const handleDomainChange = (newDomainId) => {
    setSelectedDomainId(newDomainId);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={handleDomainChange}
          value={selectedDomainId}
          items={domain.DomainList.map((item) => ({
            label: item.DomainName,
            value: item.DomainId,
            key: item.DomainId,
            color: '#1E1E1E',
          }))}
          style={{
            inputAndroid: {
              backgroundColor: '#1E1E1E',
              color: '#ffffff',
              borderRadius: 5,
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 5,
  },
  pickerContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 5,
  },
});

export default DomainPicker;

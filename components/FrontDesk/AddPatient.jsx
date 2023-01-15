import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddPatient = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedDay, setSelectedDay] = useState('1');
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('2000');
  const [selectedDoctor, setSelectedDoctor] = useState('Pediatrician');

  const handleSubmit = () => {
    // Perform actions on submit, such as sending data to a server
    console.log(`Name: ${name}`);
    console.log(`DOB: ${selectedDay} ${selectedMonth} ${selectedYear}`);
    console.log(`Doctor Type: ${selectedDoctor}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
        <Picker
          selectedValue={selectedDay}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}>
          {Array.from(Array(31), (_, i) => i + 1).map(day => <Picker.Item key={day} label={day.toString()} value={day.toString()}/>)}
        </Picker>
        <Picker
          selectedValue={selectedMonth}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}>
          <Picker.Item label="January" value="January" />
          <Picker.Item label="February" value="February" />
          <Picker.Item label="March" value="March" />
          <Picker.Item label="April" value="April" />
          <Picker.Item label="May" value="May" />
          <Picker.Item label="June" value="June" />
          <Picker.Item label="July" value="July" />
          <Picker.Item label="August" value="August" />
          <Picker.Item label="September" value="September" />
          <Picker.Item label="October" value="October" />
          <Picker.Item label="November" value="November" />
          <Picker.Item label="December" value="December" />
        </Picker>
        <Picker
          selectedValue={selectedYear}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}>
          {Array.from(Array(120), (_, i) => i + 1900).map(year => <Picker.Item key={year} label={year.toString()} value={year.toString()}/>)}
        </Picker>
      <Picker
        selectedValue={selectedDoctor}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedDoctor(itemValue)}>
        <Picker.Item label="Pediatrician" value="Pediatrician"  />
        <Picker.Item label="Cardiologist" value="Cardiologist" />
        <Picker.Item label="Neurologist" value="Neurologist" />
        <Picker.Item label="Surgeon" value="Surgeon" />
      </Picker>

      <Button
        onPress={() => {
          handleSubmit();
          navigation.navigate('FrontDesk');
        }}
        title="Submit"
        color="#FF0000"
        accessibilityLabel="Add a patient to the ER waitlist."
      />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    backgroundColor: 'white'
  },
  picker: {
    width: '80%',
    height: 40,
    margin: 10,
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
  },
});

export default AddPatient;

//___________________________________________
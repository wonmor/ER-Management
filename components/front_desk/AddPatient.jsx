import { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { doc, getDoc } from 'firebase/firestore';

import db from '../../config/firebase';

const AddPatient = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedDay, setSelectedDay] = useState('1');
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('2000');
  const [selectedDoctor, setSelectedDoctor] = useState('Pediatrician');
  const docRef = doc(db, 'mcmaster-health', 'patients');
  const docSnap = getDoc(docRef);

  const [firstRun, setFirstRun] = useState(true);
  const [names, setNames] = useState([]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
      if (firstRun) {
          docSnap
              .then(doc => {
                  if (doc.exists) {
                      const data = doc.data();
                      for (const field in data) {
                          setNames(names.concat(field));
                          setDataList(dataList.concat(data[field]));
                      }
                  } else {
                      console.log("No such document!");
                  }
              })
              .catch(error => {
                  console.log("Error getting document:", error);
              });

              setFirstRun(false);
          }
  }, [])

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

      <View style={styles.listButton}>
          <TouchableOpacity onPress={() => {
              handleSubmit();
              navigation.navigate('Severity', {
                patients: names,
              });
          }} style={styles.button}>
              <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextTitle]}>Submit</Text>
          </TouchableOpacity>
      </View>

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
    color: 'white',
  },
  listButton: {
    marginBottom: 10,
    backgroundColor: '#334155',
    padding: 15,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    elevation: 1,
},
listContent: {
    margin: 10,
    marginStart: 50,
    marginEnd: 50
},
listTextHeader: {
    textAlign: "center",
    fontSize: 48,
    color: "#fff"
},

listTextTitle: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff"
},
listTextDescription: {
    textTransform: 'capitalize',
    textAlign: "center",
    margin: 5,
    fontSize: 18,
    color: "#fff"
}
});

export default AddPatient;

//___________________________________________
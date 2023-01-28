// Adding patient to the queue
// Injury type
// Sajjad and Kevin

import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { capitalizeName } from '../Globals';

import db from '../../config/firebase';

const FrontDesk = ({ navigation }) => {
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
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
          <Text style={[{fontFamily: 'Outfit_400Regular', marginBottom: 20}, styles.welcomeText]}>
            Incoming Patients
          </Text>

          <View style={styles.listButton}>
              <TouchableOpacity onPress={() => {
                  navigation.push('AddPatient');
              }} style={styles.button}>
                  <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextTitle]}>Add New</Text>
              </TouchableOpacity>
          </View>

          <FlatList
            contentContainerStyle={styles.listContent}
            data={names}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextTitle]}>{capitalizeName(item)}</Text>
            )}
        />
      </View>    
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
    color: "#ffffff"
  },
  welcomeText: {
      fontSize: 32,
      textAlign: 'center',
      margin: 10,
      marginTop: 50,
      color: "#ffffff"
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
})


export default FrontDesk;

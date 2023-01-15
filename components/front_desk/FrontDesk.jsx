// Adding patient to the queue
// Injury type
// Sajjad and Kevin

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FrontDesk = ({ navigation }) => {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
            <View style={styles.listButton}>
                <TouchableOpacity onPress={() => {
                    navigation.push('AddPatient');
                }} style={styles.button}>
                    <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextTitle]}>Add Patient</Text>
                </TouchableOpacity>
            </View>
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

// Select whether you are a front desk staff or a doctor...
// Tom


import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#3E8E41',
      width: '70%'
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    }
});

const Login = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Front Desk</Text>
        </TouchableOpacity>
        </View>

        
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Doctors</Text>
        </TouchableOpacity>
        </View>
        </View>

     
         
    );
};

export default Login;










  


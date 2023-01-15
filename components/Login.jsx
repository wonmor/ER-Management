// Select whether you are a front desk staff or a doctor...
// Tom


import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 90,
    },
    button: {
      backgroundColor: '#FF0000',
      padding: 28,
      borderRadius: 50,
      borderWidth: 5,
      borderColor: '#DD571C',
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    }
});

const Login = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.push('FrontDesk');
                }} style={styles.button}>
                    <Text style={styles.buttonText}>Front Desk</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.push('Doctor');
                }} style={styles.button}>
                    <Text style={styles.buttonText}>Doctors</Text>
                </TouchableOpacity>
            </View>
        </View>

     
         
    );
};

export default Login;










  


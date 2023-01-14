// Select whether you are a front desk staff or a doctor...
// Tom

import { Text } from 'react-native';
//import React, { Component } from 'react'
//import { Button } from 'react-native'
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
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
    const handlePress = () => false
    return (
        //<Text>This is the log in screen</Text>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.buttonContainer}>
        <Button 
          title="Front Desk" 
          style={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Doctors" 
          style={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
    );
};

export default Login;
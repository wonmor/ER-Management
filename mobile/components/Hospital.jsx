// Select whether you are a front desk staff or a doctor...
// Tom


import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Hospital = ({ navigation }) => {
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextHeader]}>
                McMaster
            </Text>

            <Text style={[{fontFamily: 'Outfit_400Regular', marginBottom: 20}, styles.listTextTitle]}>
                Student Wellness Centre
            </Text>

            <View style={styles.listButton}>
                <TouchableOpacity onPress={() => {
                    navigation.push('FrontDesk');
                }} style={styles.button}>
                    <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextTitle]}>Front Desk</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listButton}>
                <TouchableOpacity onPress={() => {
                    navigation.push('Doctor');
                }} style={styles.button}>
                    <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextTitle]}>Doctors</Text>
                </TouchableOpacity>
            </View>
        </View>    
    );
};

export default Hospital;

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
  });










  


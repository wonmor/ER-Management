import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

import db from '../config/firebase';

const Home = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextHeader]}>
                ERMS
            </Text>

            <Text style={[{fontFamily: 'Outfit_400Regular', marginBottom: 20}, styles.listTextTitle]}>
                Select Hospital
            </Text>

            <View style={styles.listButton}>
                <TouchableOpacity onPress={() => {
                    navigation.push('Hospital');
                }} style={styles.button}>
                    <Text style={[{fontFamily: 'Outfit_600SemiBold'}, styles.listTextTitle]}>McMaster</Text>
                    <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.listTextTitle]}>Student Wellness Centre</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

export default Home;

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
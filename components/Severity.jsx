//selecting the emergency type to match with the corresponding doctor

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [rating, setRating] = useState(0);
  const [numbers, setNumbers] = useState([]);

  // This code block only runs once at the beginning...
  useEffect(() => {
    let numbersArray = [];
    for (let i = 1; i <= 5; i++) {
      numbersArray.push(i);
    }
    setNumbers(numbersArray);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.heading]}>How Bad?</Text>
        <View style={styles.stars}>
          {numbers.map((number) => (
              <>
                <TouchableOpacity onPress={() => setRating(number)}>
                  <Image source={rating >= number ? require('../assets/filledCircle.png') : require('../assets/unfilledCircle.png')} style={styles.star} />
                </TouchableOpacity>
              </>
          ))}
        </View>
        <View style={styles.stars}>
          <Ionicons name="ios-arrow-forward" size={32} color="black" />
          <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.label]}>Minor</Text>
          <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.label]}>Urgent</Text>
          <Ionicons name="ios-arrow-forward" size={32} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "#fff",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
    margin: 10
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  star: {
    width: 50,
    height: 50,
  },
});
//selecting the emergency type to match with the corresponding doctor

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

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
        <Text style={styles.heading}>How Bad?</Text>
        <View style={styles.stars}>
          
        {numbers.map((number) => (
            <>
              <TouchableOpacity onPress={() => setRating(number)}>
                <Image source={rating >= number ? require('../assets/filledCircle.png') : require('../assets/unfilledCircle.png')} style={styles.star} />
              </TouchableOpacity>
            </>
          ))}
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
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  star: {
    width: 32,
    height: 32,
  },
});
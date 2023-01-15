//selecting the emergency type to match with the corresponding doctor

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Severity = (props) => {
  const { navigation } = props;
  const { patients } = props.route.params;

  const [rating, setRating] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const [howBadSelected, setHowBadSelected] = useState(false);

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
                  <Image source={rating >= number ? require('../../assets/filledCircle.png') : require('../../assets/unfilledCircle.png')} style={styles.star} />
                </TouchableOpacity>
              </>
          ))}
        </View>
        <View style={[{marginBottom: 30}, styles.stars]}>
          <Ionicons name="arrow-back-outline" size={32} color="white" />
          <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.label]}>Minor</Text>
          <Text style={[{fontFamily: 'Outfit_400Regular'}, styles.label]}>Urgent</Text>
          <Ionicons name="arrow-forward-outline" size={32} color="white" />
        </View>

        <FlatList
            contentContainerStyle={styles.listContent}
            data={patients}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  
                }} style={styles.listButton} activeOpacity={0.8}>
                    <Text style={[{fontFamily: 'Outfit_600SemiBold'}, styles.listTextTitle]}>{item}</Text>
                </TouchableOpacity>
            )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Severity;

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    width: 50,
    height: 50,
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
  listTextTitle: {
      textAlign: "center",
      fontWeight: "bold",
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
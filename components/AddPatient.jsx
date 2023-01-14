import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const MyForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = () => {
    // Perform actions on submit, such as sending data to a server
    console.log(`Name: ${name}`);
    console.log(`DOB: ${dob}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Enter your date of birth"
        value={dob}
        onChangeText={text => setDob(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default MyForm;
//selecting the emergency type to match with the corresponding doctor

import { Text } from 'react-native';
import React from 'react';
import { TouchableHighlight } from 'react-native';

const EmergencyType = () => {
    return (
        <><Text>This is emergency type</Text><TouchableHighlight
            style={styles.button}
            onPress={() => console.log('Button pressed!')}
        >
            <Text style={styles.buttonText}>Click me!</Text>
        </TouchableHighlight></>
    );
};

const styles = {
  button: {
    backgroundColor: '#4da6ff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
};


export default EmergencyType; 


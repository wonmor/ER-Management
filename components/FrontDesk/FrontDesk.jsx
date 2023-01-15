// Adding patient to the queue
// Injury type
// Sajjad and Kevin

import { Text, Button } from 'react-native';

const FrontDesk = ({ navigation }) => {
    return (
        <Button
          onPress={() => {
            navigation.push('AddPatient')
          }}
          title="Add patient"
          color="#FF0000"
          accessibilityLabel="Add a patient to the ER waitlist."
        />
    );
};

export default FrontDesk;

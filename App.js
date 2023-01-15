import Doctor from './components/Doctor';
import Login from './components/Login';
import FrontDesk from './components/FrontDesk';
import Severity from './components/Severity';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*
ELECTRONIFY: A React Native App for Visualizing Quantum Mechanics
Developed and Designed by John Seong
--------------------------------------------------------------------
Business Model:
Let the user use the app for free for a limited time, and then charge them a subscription fee.
*/

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
          screenOptions={{
            headerStyle: { elevation: 0, backgroundColor: '#1c2e4a'},
            headerTitleStyle: {
              color: 'white',
              fontSize: 30,
            },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#394d6d' },
        }}>
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Doctor"
          component={Doctor}
          options={{ title: 'Doctor' }}
        />
        <Stack.Screen
          name="FrontDesk"
          component={FrontDesk}
          options={{ title: 'Front Desk' }}
<<<<<<< HEAD
        />
        <Stack.Screen
          name="AddPatient"
          component={AddPatient}
          options={{ title: 'Add Patient' }}
=======
        /> */}
        <Stack.Screen
          name="Severity"
          component={Severity}
          options={{ title: 'Severity' }}
>>>>>>> 3059c4dac40eb27021cef63edbf4b6dbc27dfb2f
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AppNavigator />
  );
}
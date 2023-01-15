import Doctor from './components/Doctor';
import Login from './components/Login';
import FrontDesk from './components/FrontDesk';
import AddPatient from './components/AddPatient';

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
        <Stack.Screen
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
        />
        <Stack.Screen
          name="AddPatient"
          component={AddPatient}
          options={{ title: 'Add Patient' }}
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
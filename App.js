import Doctor from './components/Doctor';
import Login from './components/Login';
import FrontDesk from './components/FrontDesk';
import Severity from './components/Severity';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer>
       <Stack.Navigator
          screenOptions={{
            headerStyle: { elevation: 0, backgroundColor: '#334155'},
            headerTitleStyle: {
              color: 'white',
              fontSize: 30,
            },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#1e293b' },
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

        <Stack.Screen
          name="Severity"
          component={Severity}
          options={{ title: 'Severity' }}
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
import Doctor from './components/Doctor';
import Welcome from './components/Welcome';
import FrontDesk from './components/FrontDesk';
import Severity from './components/Severity';
import AddPatient from './components/AddPatient';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, Outfit_400Regular, Outfit_600SemiBold } from '@expo-google-fonts/outfit';

const Stack = createNativeStackNavigator();

const screens = [
  { name: 'Welcome', component: Welcome, title: 'Welcome' },
  { name: 'Doctor', component: Doctor, title: 'Doctors' },
  { name: 'FrontDesk', component: FrontDesk, title: 'Front Desk' },
  { name: 'AddPatient', component: AddPatient, title: 'Add Patient' },
  { name: 'Severity', component: Severity, title: 'Severity' },
];

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
        /> */}
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
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <AppNavigator />
  );
}

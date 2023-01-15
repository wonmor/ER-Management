import Doctor from './components/Doctor/Doctor';
import Home from './components/Home';
import Hospital from './components/Hospital';
import FrontDesk from './components/FrontDesk/FrontDesk';
import Severity from './components/Doctor/Severity';
import AddPatient from './components/FrontDesk/AddPatient';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, Outfit_400Regular, Outfit_600SemiBold } from '@expo-google-fonts/outfit';

const Stack = createNativeStackNavigator();

const screens = [
  { name: 'Hospital', component: Hospital, title: 'Hospital' },
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
                  headerStyle: { elevation: 0, backgroundColor: '#334155' },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 30,
                      fontFamily: 'Outfit_600SemiBold',
                  },
                  headerTintColor: 'white',
                  contentStyle: { backgroundColor: '#1e293b' },
              }}
          >
              {screens.map((screen, index) => (
                  <Stack.Screen
                      key={index}
                      name={screen.name}
                      component={screen.component}
                      options={{ title: screen.title }}
                  />
              ))}
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

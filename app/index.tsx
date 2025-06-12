import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import SuraNav from './screens/suraNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SuraNav" component={SuraNav} options={{ headerShown: false }} />
      </Stack.Navigator>
     
     
  );
}

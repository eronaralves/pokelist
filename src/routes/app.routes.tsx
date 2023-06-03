import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Home } from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='pokemon'
        component={Home}
      />
    </Navigator>
  );
}
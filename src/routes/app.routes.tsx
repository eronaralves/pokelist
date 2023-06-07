import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Home } from '@screens/Home';
import { ProfilePokemon } from '@screens/ProfilePokemon';

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
        component={ProfilePokemon}
      />
    </Navigator>
  );
}
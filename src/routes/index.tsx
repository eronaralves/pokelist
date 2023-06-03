import { NavigationContainer } from '@react-navigation/native';

// Routes
import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
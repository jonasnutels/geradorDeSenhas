import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Passwords } from './pages/passwords';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <Ionicons size={size} color={color} name="home"></Ionicons>
              );
            }
            return (
              <Ionicons
                size={size}
                color={color}
                name="home-outline"
              ></Ionicons>
            );
          },
        }}
      />
      <Tab.Screen
        name="Senhas"
        component={Passwords}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <Ionicons
                  size={size}
                  color={color}
                  name="lock-closed"
                ></Ionicons>
              );
            }
            return (
              <Ionicons
                size={size}
                color={color}
                name="lock-closed-outline"
              ></Ionicons>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './componets/home';
import SecondScreen from './componets/secondScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#E91E17',
        }}
    >
      <Tab.Screen
                  name="Home" 
                  component={Home}
                  options={{
                    tabBarIcon:({color, size})=>(
                      <Ionicons name="ios-home" size={size} color={color} />
                    )
                  }} 
       />
      <Tab.Screen 
                  name="Settings" 
                  component={SecondScreen} 
                  options={{
                    tabBarIcon:({color, size})=>(
                      <Ionicons name="ios-menu" size={size} color={color} />
                    )
                  }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

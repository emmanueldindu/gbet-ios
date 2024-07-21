import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './app/Layout';

import Home from './app/tabs/Home';
import Wallet from './app/tabs/Wallet';
import Transaction from './app/tabs/Transaction';
import Settings from './app/tabs/Settings';
import ButtonTab from './app/navigation/ButtonTab';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='index'
        component={ButtonTab}
        options={{headerShown: false}}
        >

        </Stack.Screen>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{headerShown: false}}
        >

        </Stack.Screen>

        <Stack.Screen
        name='Wallet'
        component={Wallet}
        options={{headerShown: false}}
        >

        </Stack.Screen>

        <Stack.Screen
        name='Transaction'
        component={Transaction}
        options={{headerShown: false}}
        >

        </Stack.Screen>

        <Stack.Screen
        name='Settings'
        component={Settings}
        options={{headerShown: false}}
        >

        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

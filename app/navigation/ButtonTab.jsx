import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";
import Home from "../tabs/Home";
import Wallet from "../tabs/Wallet";
import Transaction from "../tabs/Transaction";
import Settings from "../tabs/Settings";


const Tab = createBottomTabNavigator();
const ButtonTab = () => {
  const screenOptions = {
    tabBarShowLabel: true,

    tabBarHideOnKeyboard: true,
    headerShown: false,
    
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      // marginBottom: 10,
      elevation: 0,
      height: '9.5%',
      backgroundColor: "white", // Set the background color to black
      borderRadius: 0, // Set the top-left border radius
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                // name={focused ? "home" : "home-outline"}
                name="home"
                size={24}
                color={focused ? "#8B52FF" : "#828282"}
              />
            );
          },

          tabBarLabel: ({ focused }) => {
            return <Text style={{ color: focused ? "#8B52FF" : "#828282" }}>Home</Text>;
          }

        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                // name={focused ? "home" : "home-outline"}
                  name="wallet-outline"
                size={24}
                color={focused ? "#8B52FF" : "#828282"}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return <Text style={{ color: focused ? "#8B52FF" : "#828282" }}>Wallet</Text>;
          }
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                // name={focused ? "home" : "home-outline"}
               name="document-text-outline"
                size={24}
                color={focused ? "#8B52FF" : "#828282"}
              />
            );
          },

          tabBarLabel: ({ focused }) => {
            return <Text style={{ color: focused ? "#8B52FF" : "#828282" }}>Transaction</Text>;
          }
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                // name={focused ? "home" : "home-outline"}
              name="settings"
                size={24}
                color={focused ? "#8B52FF" : "#828282"}
              />
            );
          },

          tabBarLabel: ({ focused }) => {
            return <Text style={{ color: focused ? "#8B52FF" : "#828282", }}>Settings</Text>;
          }

        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default ButtonTab;

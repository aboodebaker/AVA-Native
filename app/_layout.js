//_layout.js
import { Stack, } from "expo-router";
import React from 'react'
import { View, StyleSheet } from 'react-native';
import Sidebar from "../components/sidebar/sidebar";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent:'center' // Arrange children in a row
  },
  sidebar: {
    position: 'absolute', // Use 'absolute' for similar behavior to 'fixed'
    left: 20,
    top: '35%', // Center vertically
    transform: [{ translateY: -50 }], // Center vertically
    width: '20%', // Adjust the width as needed (you can use a percentage or fixed value)
    backgroundColor: 'transparent', // Match the background color of your parent component
    // Add scroll if content overflows (use this container as a wrapper)
    zIndex: 1000,
    borderRadius: 86,
  },
  mainContent: {
    flex: 3, // Adjust the width of the main content area as needed
    backgroundColor: 'white', // Customize as needed
  },
});
const _layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Sidebar />
      </View>
      <View style={styles.mainContent}>
        <Stack initialRouteName="home">
          <Stack.Screen name="home" />
        </Stack>
      </View>
    </View>
    
  )
}

export default _layout
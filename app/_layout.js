import { Stack, useNavigation } from "expo-router";
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from "../components/sidebar/sidebar";
import { AuthProvider, useAuth } from "./context/AuthContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center' // Arrange children in a row
  },
  sidebar: {
    position: 'absolute',
    left: 20,
    top: '35%',
    transform: [{ translateY: -50 }],
    width: '20%',
    backgroundColor: 'transparent',
    zIndex: 1000,
    borderRadius: 86,
  },
  mainContent: {
    flex: 3,
    backgroundColor: 'white',
  },
});

const _layout = () => {
  const { authState } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    // Check if the user is authenticated and redirect accordingly
    if (authState.authenticated) {
      navigation.navigate('home');
    } else {
      navigation.navigate('second'); // Redirect to the second screen when not logged in
    }
  }, [authState.authenticated, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Sidebar />
      </View>
      <View style={styles.mainContent}>
        <Stack initialRouteName="home">
          <Stack.Screen name="home" />
          <Stack.Screen name="second" />
        </Stack>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <_layout />
    </AuthProvider>
  );
};

export default App;

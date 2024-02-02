import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context'
import Header from './src/components/header';
import {NavigationContainer} from '@react-navigation/native';
import { TabNavigation } from './src/navigation/mainNavigation';
import MainNavigation from './src/navigation/mainNavigation';
import Layout from './src/layout/layout';
export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}> 
    {/* <Text>Open up App.js to start working on your app!</Text> */}
      
          <NavigationContainer>
              <MainNavigation  />
          </NavigationContainer>
      
      <StatusBar style="auto" />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

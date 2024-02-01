import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './src/components/header';
import {NavigationContainer} from '@react-navigation/native';
import { TabNavigation } from './src/navigation/mainNavigation';
import MainNavigation from './src/navigation/mainNavigation';
import Layout from './src/layout/layout';
export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
    {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Layout>
          <NavigationContainer>
              <TabNavigation />
              {/* <MainNavigation /> */}
          </NavigationContainer>
      </Layout>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

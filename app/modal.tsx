import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet,SafeAreaView } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React from 'react';
import SpeechBubble from '../app/infoPage';

export default function ModalScreen() {

  const munchieImage = require('../assets/images/munchie.png');
  
  return (
    <View style={styles.container}>
      {/* </View>instructions with Munchie!</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/modal.tsx" /> */}


      <SafeAreaView style={styles.container}>
      <SpeechBubble 
        munchieSource={munchieImage}
        bubbleColor="#faedd4" 
        textColor="black"
      />
    </SafeAreaView>
      {/* Use a light status bar on iOS to account for the black space above the modal
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

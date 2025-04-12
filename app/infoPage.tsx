import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import infoStyles from "../app/styles/infoStyles";

const { width, height } = Dimensions.get('window');

interface SpeechBubbleProps {
  munchieSource: any; 
  bubbleColor?: string;
  textColor?: string;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  munchieSource,
  bubbleColor = '#d49ded', 
  textColor = '#333333',
}) => {
  return (
    <View style={infoStyles.container}>

      <View style={[infoStyles.bubble, { backgroundColor: bubbleColor }]}>
        <Text style={[infoStyles.text, { color: textColor }]}>
          My name is Munchie and welcome to the <Text style={infoStyles.boldText}>Munchkins Application.</Text> {'\n\n'}
          Here are a few tips to get you started. There are 4 pages you can navigate from: {'\n\n'}
          The <Text style={infoStyles.boldText}>Home page</Text> gives you an average of the amount of points you earned. As you start your journey, you will also see special badges appear. {'\n\n'}
          The <Text style={infoStyles.boldText}>Log page</Text> is where you will be able to set your goals. Once a goal is added you will be able to click on the small circles to indicate you have finished it. {'\n\n'}
          The <Text style={infoStyles.boldText}>Profile page</Text> gives you an overview of your profile, and allows you to edit your credentials when needed. {'\n\n'}
          The <Text style={infoStyles.boldText}>Statistics page</Text> gives you an overview of your adherence rate and streaks. It also gives you details about your goal adherence.{'\n\n'}
          Eager to see you achieve your goals. {'\n'}
          Love, Munchie

        </Text>
        
        <View style={[infoStyles.pointer, { borderTopColor: bubbleColor }]} />
      </View>

      <View style={infoStyles.munchieContainer}>
        <Image 
          source={munchieSource} 
          style={infoStyles.munchie} 
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SpeechBubble;
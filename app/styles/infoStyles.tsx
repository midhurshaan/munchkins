import { StyleSheet,Dimensions } from "react-native";


const { width, height } = Dimensions.get('window');

const infoStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 20,
    },
    bubble: {
      width: width * 0.8, 
      minHeight: height * 0.6, 
      borderRadius: 20,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
      position: 'relative',
      marginBottom: 10, 
    },
    text: {
      fontSize: 14,
      lineHeight: 24,
    },
    pointer: {
      position: 'absolute',
      bottom: -15,
      right: width * 0.2, 
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 15,
      borderRightWidth: 15,
      borderTopWidth: 20,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
    },
    munchieContainer: {
      alignSelf: 'flex-end',
      marginRight: 20,
    },
    munchie: {
      width: 120,
      height: 120,
    },
    boldText:{
        fontWeight:"bold",
    }
  });

  export default infoStyles;
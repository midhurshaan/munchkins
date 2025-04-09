import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E2E2E2",
    },
    header: {
      padding: 15,
      paddingTop: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    backButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    homeText: {
      color: "#FF6B00",
      marginLeft: 5,
      fontSize: 14,
    },
    headerTitle: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
      flex: 1,
      textAlign: "center",
      marginRight: 30,
    },
    editButtonContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingHorizontal: 20,
      marginTop: 10,
    },
    editButton: {
      backgroundColor: "#654597",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
    },
    saveButton: {
      backgroundColor: "#2196F3",
    },
    cancelButton: {
      backgroundColor: "#F44336",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
      marginLeft: 10,
    },
    editButtonText: {
      color: "white",
      fontWeight: "bold",
    },
    cancelButtonText: {
      color: "white",
      fontWeight: "bold",
    },
    profileImageContainer: {
      alignItems: "center",
      marginTop: 10,
      marginBottom: 20,
    },
    avatarContainer: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#D3D3D3",
      justifyContent: "center",
      alignItems: "center",
    },
    profileName: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 10,
    },
    nameInput: {
      backgroundColor: "#E3F2FD",
      borderWidth: 1,
      borderColor: "#2196F3",
      borderRadius: 5,
      padding: 10,
      marginTop: 10,
      fontSize: 18,
      textAlign: "center",
      width: "70%",
    },
    infoSection: {
      paddingHorizontal: 20,
      paddingBottom: 30,
    },
    label: {
      color: "black",
      fontSize: 16,
      marginTop: 15,
      marginBottom: 5,
    },
    input: {
      backgroundColor: "white",
      borderRadius: 5,
      padding: 12,
      fontSize: 14,
      color: "#333",
      marginBottom: 5,
    },
    editableInput: {
      borderWidth: 1,
      borderColor: "#2196F3",
      backgroundColor: "#E3F2FD",
    },
  });

  export default profileStyles;
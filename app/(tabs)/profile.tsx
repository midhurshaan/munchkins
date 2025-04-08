import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ProfileProps {
  navigation?: any;
}

interface ProfileData {
  email: string;
  age: string;
  weight: string;
  height: string;
  address: string;
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    email: "johnwickboom@gmail.com",
    age: "21 years old",
    weight: "182 lb",
    height: "185 cm",
    address: "8845 Lincoln Rd, Montreal, Quebec, R9K 3L2",
  });

  const [tempData, setTempData] = useState<ProfileData>({ ...profileData });

  const handleEdit = () => {
    if (isEditing) {
      setProfileData({ ...tempData });
      setIsEditing(false);
      Alert.alert("Success", "Profile information updated successfully!");
    } else {
      setTempData({ ...profileData });
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempData({ ...profileData });
  };

  const handleChange = (field: keyof ProfileData, value: string) => {
    setTempData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.goBack()}
          ></TouchableOpacity>
        </View>

        <View style={styles.editButtonContainer}>
          <TouchableOpacity
            style={[styles.editButton, isEditing && styles.saveButton]}
            onPress={handleEdit}
          >
            <Text style={styles.editButtonText}>
              {isEditing ? "Save" : "Edit"}
            </Text>
          </TouchableOpacity>

          {isEditing && (
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.profileImageContainer}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={50} color="#333" />
          </View>
          <Text style={styles.profileName}>John Wick</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, isEditing && styles.editableInput]}
            value={tempData.email}
            editable={isEditing}
            onChangeText={(value) => handleChange("email", value)}
          />

          <Text style={styles.label}>Age</Text>
          <TextInput
            style={[styles.input, isEditing && styles.editableInput]}
            value={tempData.age}
            editable={isEditing}
            onChangeText={(value) => handleChange("age", value)}
          />

          <Text style={styles.label}>Weight</Text>
          <TextInput
            style={[styles.input, isEditing && styles.editableInput]}
            value={tempData.weight}
            editable={isEditing}
            onChangeText={(value) => handleChange("weight", value)}
          />

          <Text style={styles.label}>Height</Text>
          <TextInput
            style={[styles.input, isEditing && styles.editableInput]}
            value={tempData.height}
            editable={isEditing}
            onChangeText={(value) => handleChange("height", value)}
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, isEditing && styles.editableInput]}
            value={tempData.address}
            editable={isEditing}
            multiline
            onChangeText={(value) => handleChange("address", value)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default Profile;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import profileStyles from "../styles/profileStyles";

interface ProfileProps {
  navigation?: any;
}

interface ProfileData {
  name: string;
  email: string;
  age: string;
  weight: string;
  height: string;
  address: string;
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "John Wick",
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
    <SafeAreaView style={profileStyles.container}>
      <ScrollView>
        <View style={profileStyles.header}>
          <TouchableOpacity
            style={profileStyles.backButton}
            onPress={() => navigation?.goBack()}
          ></TouchableOpacity>
        </View>

        <View style={profileStyles.editButtonContainer}>
          <TouchableOpacity
            style={[profileStyles.editButton, isEditing && profileStyles.saveButton]}
            onPress={handleEdit}
          >
            <Text style={profileStyles.editButtonText}>
              {isEditing ? "Save" : "Edit"}
            </Text>
          </TouchableOpacity>

          {isEditing && (
            <TouchableOpacity
              style={profileStyles.cancelButton}
              onPress={handleCancel}
            >
              <Text style={profileStyles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={profileStyles.profileImageContainer}>
          <View style={profileStyles.avatarContainer}>
            <Ionicons name="person" size={50} color="#333" />
          </View>
          {isEditing ? (
            <TextInput
              style={profileStyles.nameInput}
              value={tempData.name}
              onChangeText={(value) => handleChange("name", value)}
              placeholder="Enter your name"
            />
          ) : (
            <Text style={profileStyles.profileName}>{profileData.name}</Text>
          )}
        </View>

        <View style={profileStyles.infoSection}>
          <Text style={profileStyles.label}>Email</Text>
          <TextInput
            style={[profileStyles.input, isEditing && profileStyles.editableInput]}
            value={tempData.email}
            editable={isEditing}
            onChangeText={(value) => handleChange("email", value)}
          />

          <Text style={profileStyles.label}>Age</Text>
          <TextInput
            style={[profileStyles.input, isEditing && profileStyles.editableInput]}
            value={tempData.age}
            editable={isEditing}
            onChangeText={(value) => handleChange("age", value)}
          />

          <Text style={profileStyles.label}>Weight</Text>
          <TextInput
            style={[profileStyles.input, isEditing && profileStyles.editableInput]}
            value={tempData.weight}
            editable={isEditing}
            onChangeText={(value) => handleChange("weight", value)}
          />

          <Text style={profileStyles.label}>Height</Text>
          <TextInput
            style={[profileStyles.input, isEditing && profileStyles.editableInput]}
            value={tempData.height}
            editable={isEditing}
            onChangeText={(value) => handleChange("height", value)}
          />

          <Text style={profileStyles.label}>Address</Text>
          <TextInput
            style={[profileStyles.input, isEditing && profileStyles.editableInput]}
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



export default Profile;
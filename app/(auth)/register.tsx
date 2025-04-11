import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import loginStyles from "../styles/loginStyles";
import { registerUser } from "../../services/authService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const result = await registerUser(email, password, name);
      if (result.success) {
        Alert.alert(
          "Registration Successful",
          "Your account has been created",
          [
            {
              text: "OK",
              onPress: () => router.replace("/(tabs)"),
            },
          ]
        );
      } else {
        Alert.alert("Registration Failed", result.error);
      }
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // In login.tsx, add this to the navigateToRegister function:
  // In login.tsx, add this to the navigateToRegister function:
  const navigateToLogin = () => {
    console.log("Login button pressed");

    try {
      console.log("Attempting navigation to /(auth)/login");
      router.push("/(auth)/login");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <SafeAreaView style={loginStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={loginStyles.contentContainer}>
          <View style={loginStyles.logoContainer}>
            <View style={loginStyles.circleLogo}>
              <Image
                source={require("../../assets/images/munchie.png")}
                style={{ width: 80, height: 80 }}
                resizeMode="contain"
              />
            </View>
            <Text style={loginStyles.logoText}>Munchkins</Text>
            <Text style={loginStyles.logoSubtitle}>Create your account</Text>
          </View>

          <View style={loginStyles.inputContainer}>
            <Text style={loginStyles.label}>Name</Text>
            <TextInput
              style={loginStyles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
            {nameError ? (
              <Text style={loginStyles.errorText}>{nameError}</Text>
            ) : null}
          </View>

          <View style={loginStyles.inputContainer}>
            <Text style={loginStyles.label}>Email</Text>
            <TextInput
              style={loginStyles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {emailError ? (
              <Text style={loginStyles.errorText}>{emailError}</Text>
            ) : null}
          </View>

          <View style={loginStyles.inputContainer}>
            <Text style={loginStyles.label}>Password</Text>
            <TextInput
              style={loginStyles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {passwordError ? (
              <Text style={loginStyles.errorText}>{passwordError}</Text>
            ) : null}
          </View>

          <View style={loginStyles.inputContainer}>
            <Text style={loginStyles.label}>Confirm Password</Text>
            <TextInput
              style={loginStyles.input}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            {confirmPasswordError ? (
              <Text style={loginStyles.errorText}>{confirmPasswordError}</Text>
            ) : null}
          </View>

          <TouchableOpacity
            style={loginStyles.button}
            onPress={handleRegister}
            disabled={isLoading}
          >
            <Text style={loginStyles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={loginStyles.registerContainer}>
            <Text style={loginStyles.registerText}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={loginStyles.registerLink}
              onPress={navigateToLogin}
            >
              <Text style={loginStyles.registerLinkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {isLoading && (
        <View style={loginStyles.loadingOverlay}>
          <ActivityIndicator size="large" color="#654597" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Register;

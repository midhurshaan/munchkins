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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import loginStyles from "../styles/loginStyles";
import { loginUser, resetPassword } from "../../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;

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

    return isValid;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const result = await loginUser(email, password);
      if (result.success) {
        router.replace("/(tabs)");
      } else {
        Alert.alert("Login Failed", result.error);
      }
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      const result = await resetPassword(email);
      if (result.success) {
        Alert.alert(
          "Password Reset",
          "Password reset link has been sent to your email"
        );
      } else {
        Alert.alert("Password Reset Failed", result.error);
      }
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToRegister = () => {
    console.log("Register button pressed");

    try {
      console.log("Attempting navigation to /(auth)/register");
      router.push("/(auth)/register");
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
              <Ionicons
                name="leaf-outline"
                size={50}
                style={loginStyles.logoIcon}
              />
            </View>
            <Text style={loginStyles.logoText}>Health Tracker</Text>
            <Text style={loginStyles.logoSubtitle}>
              Track your health goals
            </Text>
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

          <TouchableOpacity
            style={loginStyles.forgotPassword}
            onPress={handleForgotPassword}
          >
            <Text style={loginStyles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={loginStyles.button}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={loginStyles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <View style={loginStyles.registerContainer}>
            <Text style={loginStyles.registerText}>Don't have an account?</Text>
            <TouchableOpacity
              style={loginStyles.registerLink}
              onPress={() => {
                // Use the fully qualified path
                console.log(
                  "Register button pressed - with fully qualified path"
                );
                router.push("/(auth)/register");
              }}
            >
              <Text style={loginStyles.registerLinkText}>Register</Text>
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

export default Login;

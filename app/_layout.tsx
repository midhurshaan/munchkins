import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { router, Slot, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { AuthProvider, useAuth } from "../services/AuthContext";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (segments.length > 0) {
      console.log("NAVIGATION DEBUG - Current segments:", segments);
      console.log("NAVIGATION DEBUG - Is authenticated:", isAuthenticated);
      const currentRoute = segments[0];
      const isInAuthGroup = segments[0] === "(auth)";
      const isAuthScreen =
        isInAuthGroup ||
        segments.join("/").includes("login") ||
        segments.join("/").includes("register");

      console.log(
        "Current route:",
        currentRoute,
        "Is auth screen:",
        isAuthScreen
      );

      if (!isAuthenticated && !isAuthScreen) {
        router.replace("/(auth)/login");
      } else if (isAuthenticated && isAuthScreen) {
        router.replace("/(tabs)");
      }
    }
  }, [isAuthenticated, segments]);

  return <Slot />;
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

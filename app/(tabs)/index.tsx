import { Dimensions, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useAuth } from "../../services/AuthContext.js";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function TabOneScreen() {
  const { currentUser } = useAuth();

  const userName = currentUser?.displayName || "Friend";

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome {userName}!</Text>
      </View>

      <View style={styles.summaryView}>
        <View style={styles.outerRing}>
          <Text style={styles.text}>83 points</Text>
        </View>
        <View>
          <Text style={styles.pointsInfo}>+ 50 from vegetables</Text>
          <Text style={styles.pointsInfo}>+ 23 from fruits</Text>
          <Text style={styles.pointsInfo}>+ 10 from protein</Text>
        </View>
      </View>

      <View style={styles.badgesContainer}>
        <Text style={styles.badgesTitle}>Badges</Text>
        <View style={styles.badgesList}>
          <View style={styles.badgeItem}>
            <View style={styles.badgeCircle}>
              <Ionicons name="star" size={24} color="#FFD700" />
            </View>
            <Text style={styles.badgeText}>Super Veggie Streak!</Text>
          </View>

          <View style={[styles.badgeItem, { marginTop: 20 }]}>
            <View style={styles.badgeCircle}>
              <Ionicons name="trophy" size={24} color="#FF6B00" />
            </View>
            <Text style={styles.badgeText}>1 Week Streak!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E2E2E2",
  },
  titleContainer: {
    width: width * 0.9,
    marginTop: 10,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  summaryView: {
    backgroundColor: "white",
    shadowColor: "#000",
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  outerRing: {
    width: 130,
    height: 130,
    borderRadius: 70,
    borderWidth: 8,
    borderColor: "#654597",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#654597",
  },
  pointsInfo: {
    fontSize: 15,
    fontWeight: "bold",
  },
  badgesContainer: {
    backgroundColor: "white",
    width: width * 0.9,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  badgesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  badgesList: {
    width: "100%",
  },
  badgeItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#F5F5F5",
  },
  badgeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  badgeText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

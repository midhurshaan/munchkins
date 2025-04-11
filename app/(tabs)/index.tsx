import { Dimensions, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useAuth } from "../../services/AuthContext.js";

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
          <Text style={styles.text}>53 points</Text>
        </View>
        <View>
          <Text style={styles.pointsInfo}>+ 20 from vegetables</Text>
          <Text style={styles.pointsInfo}>+ 23 from fruits</Text>
          <Text style={styles.pointsInfo}>+ 10 from protein</Text>
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
});

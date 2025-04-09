import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface StatisticsProps {
  navigation?: any;
}

const Statistics: React.FC<StatisticsProps> = ({ navigation }) => {
 
  const weekdayData = [
    { day: "Mo", rate: 95 },
    { day: "Tu", rate: 100 },
    { day: "We", rate: 90 },
    { day: "Th", rate: 100 },
    { day: "Fr", rate: 90 },
    { day: "Sa", rate: 100 },
    { day: "Su", rate: 90 },
  ];

 
  const streakDays = 34;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.goBack()}
          ></TouchableOpacity>
        </View>


        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Adherence Rate (%)</Text>
          <View style={styles.chartContainer}>
            <View style={styles.barChartContainer}>
              {weekdayData.map((item, index) => (
                <View key={index} style={styles.barContainer}>
                  <View style={[styles.bar, { height: item.rate }]} />
                  <Text style={styles.barLabel}>{item.day}</Text>
                </View>
              ))}
            </View>
            <View style={styles.yAxisLabels}>
              <Text style={styles.yAxisLabel}>100</Text>
              <Text style={styles.yAxisLabel}>50</Text>
              <Text style={styles.yAxisLabel}>0</Text>
            </View>
          </View>
        </View>


        <View style={styles.streakContainer}>
          <View style={styles.streakLeftSection}>
            <Ionicons name="flame" size={24} color="#FF6B00" />
            <Text style={styles.streakDays}>{streakDays} Days</Text>
          </View>
          <View style={styles.streakRightSection}>
            <Text style={styles.streakMessage}>
              You've been eating better this month! Keep up the great work!
            </Text>
          </View>
        </View>


        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Details for this Month</Text>
          <View style={styles.detailsContent}>
            <Text style={styles.detailText}>Veggie adherence: 46.7%</Text>
            <Text style={styles.detailText}>fruit adherence: 16.6%</Text>
            <Text style={styles.detailText}>protein adherence: 36.7%</Text>
          </View>
        </View>


        <TouchableOpacity style={styles.addLogButton}>
          <Text style={styles.addLogText}>Add Log</Text>
        </TouchableOpacity>
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
  sectionContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 15,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  chartContainer: {
    flexDirection: "row",
    height: 150,
    marginTop: 10,
  },
  barChartContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  barContainer: {
    alignItems: "center",
    width: 30,
  },
  bar: {
    width: 20,
    backgroundColor: "#654597",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  barLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  yAxisLabels: {
    width: 30,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  yAxisLabel: {
    fontSize: 12,
    color: "#888",
    textAlign: "right",
  },
  streakContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 15,
    marginTop: 0,
    padding: 15,
    flexDirection: "row",
  },
  streakLeftSection: {
    flex: 1,
    alignItems: "flex-start",
  },
  streakDays: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  streakSubtext: {
    fontSize: 14,
    color: "#666",
  },
  streakRightSection: {
    flex: 2,
    justifyContent: "center",
  },
  streakMessage: {
    fontSize: 14,
    color: "#333",
  },
  detailsContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 15,
    marginTop: 0,
    padding: 15,
  },
  detailsContent: {
    padding: 15,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  addLogButton: {
    backgroundColor: "#654597",
    borderRadius: 10,
    margin: 15,
    marginTop: 0,
    padding: 10,
    alignItems: "center",
  },
  addLogText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Statistics;

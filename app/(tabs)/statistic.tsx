import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import statisticStyles from "../styles/statisticStyles";

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
    <SafeAreaView style={statisticStyles.container}>
      <ScrollView>
        <View style={statisticStyles.header}>
          <TouchableOpacity
            style={statisticStyles.backButton}
            onPress={() => navigation?.goBack()}
          ></TouchableOpacity>
        </View>

        <View style={statisticStyles.sectionContainer}>
          <Text style={statisticStyles.sectionTitle}>Adherence Rate (%)</Text>
          <View style={statisticStyles.chartContainer}>
            <View style={statisticStyles.gridLinesContainer}>
              <View style={statisticStyles.gridLine100} />
              <View style={statisticStyles.gridLine50} />
              <View style={statisticStyles.gridLine0} />
            </View>

            <View style={statisticStyles.barChartContainer}>
              {weekdayData.map((item, index) => (
                <View key={index} style={statisticStyles.barContainer}>
                  <View style={[statisticStyles.bar, { height: item.rate }]} />
                  <Text style={statisticStyles.barLabel}>{item.day}</Text>
                </View>
              ))}
            </View>
            <View style={statisticStyles.yAxisLabels}>
              <Text style={statisticStyles.yAxisLabel}>100</Text>
              <Text style={statisticStyles.yAxisLabel}>50</Text>
              <Text style={statisticStyles.yAxisLabel}>0</Text>
            </View>
          </View>
        </View>

        <View style={statisticStyles.streakContainer}>
          <View style={statisticStyles.streakLeftSection}>
            <Ionicons name="flame" size={24} color="#FF6B00" />
            <Text style={statisticStyles.streakDays}>{streakDays} Days</Text>
          </View>
          <View style={statisticStyles.streakRightSection}>
            <Text style={statisticStyles.streakMessage}>
              You've been eating better this month! Keep up the great work!
            </Text>
          </View>
        </View>

        <View style={statisticStyles.detailsContainer}>
          <Text style={statisticStyles.sectionTitle}>
            Details for this Month
          </Text>
          <View style={statisticStyles.detailsContent}>
            <Text style={statisticStyles.detailText}>
              Veggie adherence: 46.7%
            </Text>
            <Text style={statisticStyles.detailText}>
              fruit adherence: 16.6%
            </Text>
            <Text style={statisticStyles.detailText}>
              protein adherence: 36.7%
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Statistics;

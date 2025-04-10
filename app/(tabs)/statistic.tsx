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
import { BarChart } from "react-native-gifted-charts";

interface StatisticsProps {
  navigation?: any;
}

const Statistics: React.FC<StatisticsProps> = ({ navigation }) => {
  const weekdayData = [
    { value: 95, label: "Mo", frontColor: '#654597' },
    { value: 70, label: "Tu", frontColor: '#654597' },
    { value: 60, label: "We", frontColor: '#654597'},
    { value: 75, label: "Th", frontColor: '#654597' },
    { value: 100, label: "Fr", frontColor: '#654597'},
    { value: 82, label: "Sa", frontColor: '#654597' },
    { value: 93, label: "Su", frontColor: '#654597'},
  ];

  const streakDays = 4;

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

            <View style={statisticStyles.barChartContainer}>
              <BarChart data={weekdayData} width={300} height={150} barBorderTopLeftRadius={6} barBorderTopRightRadius={6} maxValue={100} stepValue={50} noOfSections={2} spacing={12} />
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

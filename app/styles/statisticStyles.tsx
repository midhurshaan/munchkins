import { StyleSheet } from "react-native";

const statisticStyles = StyleSheet.create({
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
    height: 125,
    marginTop: 10,
    position: "relative",
  },
  gridLinesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 30,
    height: 125,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  gridLine100: {
    position: "absolute",
    top: 5, 
    height: 1,
    backgroundColor: "#E0E0E0",
    width: "100%",
  },
  gridLine50: {
    position: "absolute",
    top: 53, 
    height: 1,
    backgroundColor: "#E0E0E0",
    width: "100%",
  },
  gridLine0: {
    position: "absolute",
    bottom: 20, 
    height: 1,
    backgroundColor: "#E0E0E0",
    width: "100%",
  },
  barChartContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 0,
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
    paddingBottom: 15,
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
});

export default statisticStyles;

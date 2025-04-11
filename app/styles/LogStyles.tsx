import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 30,
  },
  dateContainer: {
    backgroundColor: "#f0f0f0",
    padding: 15,
  },
  dateText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  taskCount: {
    color: "#666",
    marginTop: 5,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  taskCard: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: "center",
  },
  completedTask: {
    opacity: 0.6,
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  checkboxContainer: {
    marginRight: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#8e44ad",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  categoryText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  deleteButton: {
    padding: 5,
  },
  addButton: {
    backgroundColor: "#654597",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  labelText: {
    fontSize: 16,
    marginBottom: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  categoryOption: {
    margin: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  selectedCategory: {
    borderWidth: 2,
    borderColor: "#000",
  },
  categoryOptionText: {
    color: "white",
    fontWeight: "bold",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 5,
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
  },
  saveButton: {
    backgroundColor: "#27ae60",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  servingBubbleContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  servingBubbles: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#888',
    marginRight: 5,
  },
  completedServings: {
    backgroundColor: '#4CAF50',
    borderColor: '#388E3C',
  },
});

export default styles;
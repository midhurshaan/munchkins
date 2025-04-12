import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/LogStyles";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: string;
  serving: number;
  completedServings: number;
}

const HealthGoalsLog: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Eat 3 servings of fruits",
      completed: true,
      category: "Nutrition",
      serving: 3,
      completedServings: 3,
    },
    {
      id: "2",
      title: "Eat 3 servings of vegetables",
      completed: true,
      category: "Nutrition",
      serving: 3,
      completedServings: 2,
    },
    {
      id: "3",
      title: "Drink 8 glasses of water",
      completed: false,
      category: "Hydration",
      serving: 8,
      completedServings: 4,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Nutrition");
  const [newServings, setServings] = useState("1");
  const [completedCount, setCompletedCount] = useState(0);

  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  useEffect(() => {
    const completed = tasks.filter((task) => task.completed).length;
    setCompletedCount(completed);
  }, [tasks]);

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              completedServings: task.completed ? 0 : task.serving,
            }
          : task
      )
    );
  };

  const toggleServing = (taskId: String, servingIndex: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          let newCompletedServings = 0;

          if (servingIndex < task.completedServings) {
            newCompletedServings = servingIndex;
          } else {
            newCompletedServings = servingIndex + 1;
          }
          const allComplete = newCompletedServings === task.serving;

          return {
            ...task,
            completedServings: newCompletedServings,
            completed: allComplete,
          };
        }
        return task;
      })
    );
  };

  const addTask = () => {
    if (newTaskTitle.trim() === "") return;

    const servingsNumber = parseInt(newServings) || 1;

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      completed: false,
      category: newTaskCategory,
      serving: servingsNumber,
      completedServings: 0,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setServings("1");
    setModalVisible(false);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const categoryColors: Record<string, string> = {
    Nutrition: "#E640AB",
    Hydration: "#372FE5",
  };

  const getCategoryBadgeStyle = (category: string) => {
    return {
      backgroundColor: categoryColors[category] || "#6A5ACD",
    };
  };

  const servingBubbles = (task: Task) => {
    const bubbles = [];

    for (let i = 0; i < task.serving; i++) {
      const isCompleted = i < task.completedServings;

      bubbles.push(
        <TouchableOpacity
          key={`${task.id}-serving-${i}`}
          style={[
            styles.servingBubbles,
            isCompleted && styles.completedServings,
          ]}
          onPress={() => toggleServing(task.id, i)}
        />
      );
    }
    return <View style={styles.servingBubbleContainer}>{bubbles}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
        <Text style={styles.taskCount}>
          {completedCount}/{tasks.length} Goals Completed
        </Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {tasks.map((task) => (
          <View
            key={task.id}
            style={[styles.taskCard, task.completed && styles.completedTask]}
          >
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => toggleTaskCompletion(task.id)}
            >
              <View style={styles.checkbox}>
                {task.completed && (
                  <Ionicons name="checkmark" size={18} color="black" />
                )}
              </View>
            </TouchableOpacity>

            <View style={styles.taskContent}>
              <Text
                style={[
                  styles.taskTitle,
                  task.completed && styles.completedTaskText,
                ]}
              >
                {task.title}
              </Text>

              <View style={styles.taskDetails}>
                <View
                  style={[
                    styles.categoryBadge,
                    getCategoryBadgeStyle(task.category),
                  ]}
                >
                  <Text style={styles.categoryText}>{task.category}</Text>
                </View>

                {servingBubbles(task)}
              </View>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTask(task.id)}
            >
              <Ionicons name="close-circle-outline" size={20} color="#888" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Add a New Goal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Health Goal</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your health goal"
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />

            <Text style={styles.labelText}>Category:</Text>
            <View style={styles.categoryContainer}>
              {["Nutrition", "Hydration"].map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryOption,
                    getCategoryBadgeStyle(category),
                    newTaskCategory === category && styles.selectedCategory,
                  ]}
                  onPress={() => setNewTaskCategory(category)}
                >
                  <Text style={styles.categoryOptionText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.labelText}>Servings:</Text>
            <TextInput
              style={styles.input}
              placeholder="Number of servings"
              value={newServings}
              onChangeText={setServings}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={addTask}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HealthGoalsLog;

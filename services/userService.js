import {
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "./firebaseConfig";

export const getUserProfile = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return { success: true, data: userDoc.data() };
    } else {
      return { success: false, error: "User profile not found" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateUserProfile = async (userId, userData) => {
  try {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
      ...userData,
      updatedAt: new Date(),
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const addHealthTask = async (userId, task) => {
  try {
    const tasksCollectionRef = collection(db, "users", userId, "tasks");
    const docRef = await addDoc(tasksCollectionRef, {
      ...task,
      createdAt: new Date(),
      completed: false,
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getUserTasks = async (userId) => {
  try {
    const tasksCollectionRef = collection(db, "users", userId, "tasks");
    const tasksSnapshot = await getDocs(tasksCollectionRef);

    const tasks = [];
    tasksSnapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return { success: true, data: tasks };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateTaskStatus = async (userId, taskId, completed) => {
  try {
    const taskDocRef = doc(db, "users", userId, "tasks", taskId);
    await updateDoc(taskDocRef, {
      completed,
      updatedAt: new Date(),
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteTask = async (userId, taskId) => {
  try {
    const taskDocRef = doc(db, "users", userId, "tasks", taskId);
    await deleteDoc(taskDocRef);

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

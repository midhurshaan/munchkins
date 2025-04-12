# Munchkins
Gamifying healthy eating by assigning points based on nutrient density and tracking your dietary goals and needs. Munchkins will have an interactive and fun interface to encourage users to meet their daily needs. <br>
## Members
Midhurshaan Nadarajah (40245613) <br>
Oviya Sinnathamby (40249479) <br>
Annabel Zecchel (40245507)

## Tech Stack

* React Native (using Expo)
* Firebase (Authentication, Firestore)
* React Navigation (Expo Router)
* React Native Charts

## Prerequisites

* [Node.js](https://nodejs.org/) (v14 or later)
* [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/) (v1.22 or later)
* [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
* [Firebase account](https://firebase.google.com/) (for authentication and database)
* iOS Simulator (macOS only) or Android Emulator (via Android Studio)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/munchkins-app.git
   cd munchkins-app
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Install required Expo packages:
   ```
   expo install expo-font expo-router expo-splash-screen expo-status-bar expo-web-browser react-native-reanimated
   ```

4. Firebase Configuration:
   * The app already includes a Firebase configuration in `services/firebaseConfig.js`.

## Running the App

### Using Expo Go

1. Start the development server:
   ```
   npm start
   # or
   expo start
   ```

2. Use Expo Go to run the app:
   * Scan the QR code with the Expo Go app on your Android device
   * For iOS, scan the QR code with your camera app and follow the prompt

### Using Simulators/Emulators

#### iOS Simulator (macOS only)

1. Start the iOS Simulator:
   ```
   npm run ios
   # or
   expo start --ios
   ```

#### Android Emulator

1. Start an Android Emulator from Android Studio

2. Run on Android:
   ```
   npm run android
   # or
   expo start --android
   ```

## Firebase Setup Details

1. Create a new Firebase project at [firebase.google.com](https://firebase.google.com/)
2. Enable Authentication with Email/Password sign-in method
3. Create a Firestore Database and set up the following collections:
   * `users` - For user profiles
   * `users/{userId}/tasks` - For user health tasks

4. Update the Firebase configuration in `services/firebaseConfig.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID",
   };
   ```

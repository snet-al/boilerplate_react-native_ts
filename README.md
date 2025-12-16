# React Native TypeScript Boilerplate

A production-ready [**React Native**](https://reactnative.dev) boilerplate with TypeScript, featuring a comprehensive component library and scalable architecture.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20.x ([Download](https://nodejs.org/))
- **npm** or **Yarn** package manager
- **React Native development environment** set up for your target platform(s):
  - **For iOS**: 
    - macOS (required for iOS development)
    - Xcode (latest version recommended)
    - CocoaPods (installed via Ruby)
    - Ruby >= 2.7 (for CocoaPods)
  - **For Android**:
    - Android Studio
    - Android SDK
    - Java Development Kit (JDK) 17 or newer

> **Note**: Follow the official [React Native Environment Setup Guide](https://reactnative.dev/docs/set-up-your-environment) for detailed platform-specific instructions.


## 🚀 Quick Start

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.


## 📁 Project Structure

```
boilerplate_react_native_ts/
├── src/                      # Application source code
│   ├── components/           # Reusable components
│   │   ├── ui/               # UI components (Button, Text, Input, etc.)
│   │   └── layout/           # Layout components (Screen, Row, Column, etc.)
│   ├── screens/              # Screen components
│   ├── theme/                # Design system (colors, typography, spacing)
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Utility functions
│   ├── types/                # TypeScript types
│   └── constants/            # App constants
├── android/                  # Android native code
├── ios/                      # iOS native code
├── __tests__/                # Test files
└── App.tsx                   # App entry point
```

### Learn More

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Navigation](https://reactnavigation.org/)
- [Integration Guide](https://reactnative.dev/docs/integration-with-existing-apps)
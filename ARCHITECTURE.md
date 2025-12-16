# React Native TypeScript Boilerplate - Architecture

## 📁 Folder Structure Overview

```
boilerplate_react_native_ts/
├── 📱 Core Application Files
│   ├── App.tsx                      # Main application component
│   ├── index.js                     # Entry point for React Native
│   └── app.json                     # App configuration (name, display name)
│
├── 🔧 Configuration Files
│   ├── package.json                 # Dependencies and scripts
│   ├── tsconfig.json                # TypeScript configuration
│   ├── babel.config.js              # Babel transpiler configuration
│   ├── metro.config.js              # Metro bundler configuration
│   ├── jest.config.js               # Jest testing configuration
│   ├── .eslintrc.js                 # ESLint linting rules
│   ├── .prettierrc.js               # Prettier code formatting
│   ├── .watchmanconfig              # Watchman file watching
│   └── .gitignore                   # Git ignore patterns
│
├── 🧪 Testing
│   └── __tests__/                   # Test files directory
│       └── App.test.tsx             # Main app component test
│
├── 🤖 Android Platform
│   └── android/                     # Android native code
│       ├── app/                     # Android app module
│       │   ├── src/main/            # Main source code
│       │   │   ├── java/            # Kotlin/Java code
│       │   │   ├── res/             # Android resources
│       │   │   └── AndroidManifest.xml
│       │   ├── build.gradle         # App-level build config
│       │   └── debug.keystore       # Debug signing key
│       ├── build.gradle             # Project-level build config
│       ├── settings.gradle          # Project settings
│       ├── gradle.properties        # Gradle properties
│       └── gradle/                  # Gradle wrapper files
│
├── 🍎 iOS Platform
│   └── ios/                         # iOS native code
│       ├── boilerplate_react_native_ts/  # iOS app directory
│       │   ├── AppDelegate.swift    # iOS app delegate
│       │   ├── Info.plist           # iOS app info
│       │   ├── LaunchScreen.storyboard
│       │   ├── PrivacyInfo.xcprivacy
│       │   └── Images.xcassets/    # App icons and images
│       ├── boilerplate_react_native_ts.xcodeproj/  # Xcode project
│       ├── Podfile                  # CocoaPods dependencies
│       └── Pods/                    # CocoaPods installed packages
│
├── 💎 Ruby Dependencies (iOS)
│   ├── Gemfile                      # Ruby dependencies (CocoaPods)
│   ├── Gemfile.lock                 # Locked Ruby dependencies
│   ├── vendor/bundle/               # Bundled Ruby gems
│   └── .bundle/                     # Bundle configuration
│
├── 📦 Node Dependencies
│   ├── package-lock.json            # Locked npm dependencies
│   └── node_modules/                # Installed npm packages
│
└── 📚 Documentation
    └── README.md                    # Project documentation

```

## 🏗️ Architecture Patterns

### 1. **Root Level Organization**

The root level contains:
- **Application entry point** (`App.tsx`, `index.js`)
- **All configuration files** (TypeScript, Babel, ESLint, etc.)
- **Platform-specific directories** (`android/`, `ios/`)
- **Dependency management** (`package.json`, `Gemfile`)

### 2. **Platform-Specific Code**

#### Android (`android/`)
- Standard Android Gradle project structure
- Native Android code in `app/src/main/`
- Build configuration files
- Debug keystore for development

#### iOS (`ios/`)
- Standard Xcode project structure
- Native Swift code in app directory
- CocoaPods dependency management
- Asset catalogs for images/icons

### 3. **TypeScript Configuration**

```json
{
  "extends": "@react-native/typescript-config",
  "compilerOptions": {
    "types": ["jest"]
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["**/node_modules", "**/Pods"]
}
```

Key features:
- Extends React Native's official TypeScript config
- Includes Jest types for testing
- Excludes native dependencies

### 4. **Testing Structure**

- Tests live in `__tests__/` directory at root level
- Test files use `.test.tsx` extension
- Uses Jest + React Test Renderer
- Example: `__tests__/App.test.tsx`

### 5. **Dependencies Strategy**

#### JavaScript/TypeScript (`package.json`)
- **Runtime dependencies**: React, React Native, Safe Area Context
- **Dev dependencies**: TypeScript, Jest, ESLint, Prettier, Babel

#### iOS Ruby Dependencies (`Gemfile`)
- Manages CocoaPods installation
- Bundled locally in `vendor/bundle/`

### 6. **Configuration Layer**

All configuration files at root level:
- **babel.config.js**: Uses `@react-native/babel-preset`
- **metro.config.js**: Metro bundler settings
- **jest.config.js**: Test runner configuration
- **.eslintrc.js**: Extends `@react-native` rules
- **.prettierrc.js**: Code formatting rules

## 📱 Application Structure

### Current Implementation

```typescript
// App.tsx - Main Component
SafeAreaProvider
  └── StatusBar
  └── AppContent
      └── Container View
          └── NewAppScreen (Demo Component)

## 🔄 Build Process

### Android
1. Gradle builds native Android app
2. Metro bundles JavaScript
3. Native bridge connects React Native to Android

### iOS
1. CocoaPods manages dependencies
2. Xcode builds native iOS app
3. Metro bundles JavaScript
4. Native bridge connects React Native to iOS

## 🛠️ Maintenance

- **Upgrade React Native**: Follow official upgrade helper
- **Update Dependencies**: Use `npm update` carefully
- **iOS Pods**: Re-run `pod install` after native changes
- **Clean Builds**:
  - Android: `./gradlew clean`
  - iOS: Clean build folder in Xcode

## 📝 Notes

- This is a **flat architecture** at root level (App.tsx directly in root)
- Best for small apps or starting boilerplate
- Consider moving to `src/` structure as app grows
- Native code changes require platform-specific knowledge
- All JavaScript/TypeScript code is cross-platform by default


# React Native TypeScript - Folder Organization Template

## 📋 Quick Reference Checklist

Use this template to replicate the folder structure in any new React Native TypeScript project.

## ✅ Root Level Files (Must Have)

```
project-name/
├── ✓ App.tsx                    # Main application component
├── ✓ index.js                   # React Native entry point
├── ✓ app.json                   # App metadata configuration
├── ✓ package.json               # NPM dependencies and scripts
├── ✓ package-lock.json          # Locked dependencies (auto-generated)
├── ✓ tsconfig.json              # TypeScript configuration
├── ✓ babel.config.js            # Babel transpiler config
├── ✓ metro.config.js            # Metro bundler config
├── ✓ jest.config.js             # Jest testing config
├── ✓ .eslintrc.js               # ESLint rules
├── ✓ .prettierrc.js             # Prettier formatting
├── ✓ .watchmanconfig            # Watchman config
├── ✓ .gitignore                 # Git ignore patterns
└── ✓ README.md                  # Project documentation
```

## ✅ iOS Specific Files (for iOS support)

```
project-name/
├── ✓ Gemfile                    # Ruby dependencies (CocoaPods)
├── ✓ Gemfile.lock               # Locked Ruby deps (auto-generated)
├── ✓ .bundle/                   # Bundle configuration
└── ✓ vendor/bundle/             # Bundled Ruby gems
```

## 📁 Directory Structure Checklist

### ✅ Testing Directory

```
__tests__/
└── App.test.tsx                 # Main app test file
```

### ✅ Android Platform Directory

```
android/
├── app/
│   ├── src/
│   │   └── main/
│   │       ├── java/            # Kotlin/Java source code
│   │       ├── res/             # Android resources
│   │       └── AndroidManifest.xml
│   ├── build.gradle             # App-level build config
│   └── debug.keystore           # Debug signing key
├── gradle/
│   └── wrapper/                 # Gradle wrapper files
├── build.gradle                 # Project-level build config
├── settings.gradle              # Gradle settings
├── gradle.properties            # Gradle properties
├── gradlew                      # Gradle wrapper (Unix)
└── gradlew.bat                  # Gradle wrapper (Windows)
```

### ✅ iOS Platform Directory

```
ios/
├── ProjectName/                 # iOS app directory (named after project)
│   ├── AppDelegate.swift        # App delegate
│   ├── Info.plist               # iOS configuration
│   ├── LaunchScreen.storyboard  # Launch screen
│   ├── PrivacyInfo.xcprivacy    # Privacy manifest
│   └── Images.xcassets/         # Asset catalog
│       ├── AppIcon.appiconset/  # App icons
│       └── Contents.json
├── ProjectName.xcodeproj/       # Xcode project file
│   ├── project.pbxproj
│   └── xcshareddata/
│       └── xcschemes/
└── Podfile                      # CocoaPods dependencies
```

### ✅ Generated/Build Directories (Git Ignored)

```
node_modules/                    # NPM packages (auto-generated)
android/build/                   # Android build output
ios/build/                       # iOS build output
ios/Pods/                        # CocoaPods packages (auto-generated)
```

## 🎯 Implementation Steps

### Step 1: Initialize React Native Project

```bash
# Using React Native CLI
npx @react-native-community/cli@latest init ProjectName --template react-native-template-typescript

# Or using this boilerplate
git clone <this-repo> new-project-name
cd new-project-name
```

### Step 2: Verify Core Files Exist

Check that all root-level configuration files are present:
- [ ] `App.tsx` - Main component
- [ ] `index.js` - Entry point
- [ ] `tsconfig.json` - TypeScript config
- [ ] `babel.config.js` - Babel config
- [ ] `package.json` - Dependencies

### Step 3: Verify Platform Directories

Check platform-specific directories:
- [ ] `android/` - Android native code
- [ ] `ios/` - iOS native code
- [ ] Both platforms have proper native configs

### Step 4: Set Up Testing

Ensure testing infrastructure:
- [ ] `__tests__/` directory exists
- [ ] `jest.config.js` is configured
- [ ] Basic test file exists (e.g., `App.test.tsx`)

### Step 5: Configure Linting & Formatting

Verify code quality tools:
- [ ] `.eslintrc.js` - Linting rules
- [ ] `.prettierrc.js` - Formatting rules
- [ ] Both extend React Native presets

### Step 6: iOS Dependencies (if supporting iOS)

Set up Ruby and CocoaPods:
- [ ] `Gemfile` - Ruby dependencies
- [ ] `.bundle/config` - Bundle settings
- [ ] Run `bundle install`
- [ ] Run `bundle exec pod install`

## 📝 Configuration Templates

### `app.json` Template

```json
{
  "name": "ProjectName",
  "displayName": "Project Display Name"
}
```

### `tsconfig.json` Template

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

### `babel.config.js` Template

```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
};
```

### `metro.config.js` Template

```javascript
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

### `jest.config.js` Template

```javascript
module.exports = {
  preset: 'react-native',
};
```

### `.eslintrc.js` Template

```javascript
module.exports = {
  root: true,
  extends: '@react-native',
};
```

### `.prettierrc.js` Template

```javascript
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
};
```

## 📦 Essential Dependencies

### Production Dependencies

```json
{
  "react": "^19.2.0",
  "react-native": "^0.83.0",
  "@react-native/new-app-screen": "^0.83.0",
  "react-native-safe-area-context": "^5.5.2"
}
```

### Development Dependencies

```json
{
  "@babel/core": "^7.25.2",
  "@babel/preset-env": "^7.25.3",
  "@babel/runtime": "^7.25.0",
  "@react-native-community/cli": "^20.0.0",
  "@react-native/babel-preset": "^0.83.0",
  "@react-native/eslint-config": "^0.83.0",
  "@react-native/metro-config": "^0.83.0",
  "@react-native/typescript-config": "^0.83.0",
  "@types/jest": "^29.5.13",
  "@types/react": "^19.2.0",
  "@types/react-test-renderer": "^19.1.0",
  "eslint": "^8.19.0",
  "jest": "^29.6.3",
  "prettier": "^2.8.8",
  "react-test-renderer": "^19.2.0",
  "typescript": "^5.8.3"
}
```

## 🔧 NPM Scripts

Essential scripts for `package.json`:

```json
{
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  }
}
```

## 📱 Scaling: When to Reorganize

The flat structure works well for:
- ✅ Small applications (< 10 screens)
- ✅ Prototypes and MVPs
- ✅ Learning projects
- ✅ Boilerplate starters

Consider adding `src/` directory structure when:
- ❌ You have 10+ components
- ❌ Multiple navigation stacks
- ❌ Complex state management
- ❌ Multiple developers on team

### Recommended `src/` Structure (for larger apps)

```
src/
├── components/              # Reusable UI components
│   ├── common/              # Buttons, inputs, cards, etc.
│   └── features/            # Feature-specific components
├── screens/                 # Screen/page components
├── navigation/              # Navigation configuration
│   ├── RootNavigator.tsx
│   └── stacks/
├── services/                # API and external services
│   ├── api/
│   └── storage/
├── hooks/                   # Custom React hooks
├── contexts/                # React Context providers
├── utils/                   # Helper functions
├── constants/               # Constants and configs
├── types/                   # TypeScript type definitions
├── assets/                  # Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
└── theme/                   # Styling and theming
    ├── colors.ts
    ├── typography.ts
    └── spacing.ts
```

## 🎨 Best Practices

1. **Keep configuration at root level** - Never nest config files
2. **Separate tests by feature** - Match test structure to component structure
3. **Platform-specific code in respective directories** - Keep JS/TS cross-platform
4. **Use absolute imports** - Configure path aliases in `tsconfig.json`
5. **Consistent naming** - PascalCase for components, camelCase for functions
6. **Type everything** - Leverage TypeScript for better DX
7. **Test critical paths** - Focus on user-facing functionality

## 🚀 Quick Start Commands

After setting up the structure:

```bash
# Install dependencies
npm install

# iOS only: Install Ruby gems
bundle install

# iOS only: Install CocoaPods
bundle exec pod install

# Start Metro bundler
npm start

# Run on Android (in another terminal)
npm run android

# Run on iOS (in another terminal)
npm run ios

# Run tests
npm test

# Run linter
npm run lint
```

## ✨ Checklist Summary

Final verification before starting development:

- [ ] All config files present and configured
- [ ] `node_modules/` installed successfully
- [ ] Android directory structure correct
- [ ] iOS directory structure correct (if applicable)
- [ ] iOS CocoaPods installed (if applicable)
- [ ] Tests run successfully
- [ ] Linter runs without errors
- [ ] App launches on target platform(s)
- [ ] Hot reload works
- [ ] TypeScript compilation works

## 📚 Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Metro Bundler Docs](https://facebook.github.io/metro/)


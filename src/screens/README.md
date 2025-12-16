# Screens Folder

## 📖 Definition

**Screens** are full-page view components that users navigate between in the app. They represent complete user interfaces for specific features or sections.

Screens are:
- Top-level navigation destinations
- Composed of reusable components from `@/components`
- Connected to navigation and state management
- Responsible for data fetching and business logic

## 📁 Structure Rules

### Folder Structure

Each screen must have its own folder with these files:

```
screens/
├── ScreenName/
│   ├── ScreenName.tsx         # Main component
│   └── ScreenName.styles.ts   # Styles
└── index.tsx                  # Exports
```

### Naming Rules

1. **Folder**: `PascalCase` (e.g., `Dashboard`, `Login`)
2. **Component file**: `ScreenName.tsx`
3. **Styles file**: `ScreenName.styles.ts`
4. **Export name**: Must end with `Screen` suffix

```typescript
// ✅ Correct
export const DashboardScreen = () => { ... }

// ❌ Wrong
export const Dashboard = () => { ... }
```

### Export Rules

All screens must be exported in `index.tsx`:

```typescript
export {DashboardScreen} from './Dashboard/Dashboard'
export {LoginScreen} from './Login/Login'
```

## 📋 Component Rules

### ✅ Screens SHOULD:

- Have one clear purpose
- Use components from `@/components`
- Use path aliases (`@/`) for imports
- Handle loading and error states
- Connect to Redux when needed
- Use TypeScript types
- Export styles to separate `.styles.ts` file

### ❌ Screens SHOULD NOT:

- Use inline styles
- Contain reusable UI components
- Import from other screens
- Handle API logic directly (use `@/services`)
- Manually navigate after auth changes
- Ignore TypeScript errors

## 📝 Example

```typescript
// Dashboard/Dashboard.tsx
import React from 'react'
import {View, Text} from 'react-native'
import {Button} from '@/components'
import {styles} from './Dashboard.styles'

export const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    </View>
  )
}
```

```typescript
// Dashboard/Dashboard.styles.ts
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
})
```


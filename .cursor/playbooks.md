================================
FEATURE SCAFFOLD PLAYBOOK
================================
TASK: Scaffold a new feature

Inputs:
- Feature name: <feature>

Files to create:
- api.ts
- store.ts
- types.ts
- components.tsx

Rules:
- Feature-based architecture
- Strong typing
- No UI libraries
- No navigation logic inside feature
================================


================================
SCREEN CREATION PLAYBOOK
================================
TASK: Create a screen

Inputs:
- File path: src/app/<route>.tsx

Requirements:
- Expo Router screen
- Keyboard-safe layout
- Platform compatible (iOS + Android)
- UI only, no business logic
- Uses feature hooks for data/state
================================


================================
ZUSTAND STORE PLAYBOOK
================================
TASK: Create Zustand store

Requirements:
- Typed state and actions
- No side effects inside UI
- Persist only when necessary
- Use Expo SecureStore for sensitive data
================================


================================
API LAYER PLAYBOOK
================================
TASK: Add API functions

Requirements:
- Use shared apiClient
- Explicit request and response types
- No axios instance creation
- No direct API calls from screens
================================


================================
EXPO / NATIVE INTEGRATION PLAYBOOK
================================
TASK: Add native functionality

Rules:
- Use Expo APIs first
- Explain permissions handling
- Support iOS and Android
- Use Dev Client when native libraries are required
================================


================================
PERFORMANCE REVIEW PLAYBOOK
================================
TASK: Performance review

Check for:
- Unnecessary re-renders
- Incorrect hook usage
- Expensive effects
- FlatList optimizations
================================


================================
REFACTOR PLAYBOOK
================================
TASK: Refactor code

Goals:
- Reduce complexity
- Extract hooks
- Improve readability
- Preserve existing behavior
================================


================================
PRE-COMMIT REVIEW PLAYBOOK
================================
TASK: Pre-commit review

Act as a senior React Native engineer.
Review for:
- Architecture consistency
- Expo compatibility
- Platform-specific bugs
- Type safety issues
================================

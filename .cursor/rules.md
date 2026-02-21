You are working in a production-grade React Native application.

PLATFORM
- Expo with Dev Client
- Expo Router for navigation
- Target platforms: iOS and Android only

LANGUAGE & STYLE
- TypeScript with strict typing
- Functional components only
- No DOM, browser, or web-only APIs
- No HTML or CSS
- No UI libraries unless explicitly requested

ARCHITECTURE
- Feature-based folder structure
- Business logic must live outside UI components
- Zustand for client state
- TanStack Query for server state
- All HTTP calls must go through apiClient

QUALITY & PERFORMANCE
- Optimize for mobile performance
- Avoid unnecessary re-renders
- Avoid inline styles and inline functions
- Prefer StyleSheet or extracted styles
- Keep files under 300 lines
- Prefer Expo APIs over custom native code

BEHAVIOR
- Follow existing project patterns
- Do not introduce new dependencies without explanation
- Ask for clarification only if requirements are ambiguous
- Preserve existing behavior unless explicitly asked to change it

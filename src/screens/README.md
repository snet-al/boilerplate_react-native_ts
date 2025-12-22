## `src/screens`

This folder contains the app’s **route-level screens** (React Navigation destinations).

Screens should be **thin orchestrators**: they compose modules and UI components to form a full view.

## Rules when editing this folder

- **One screen = one folder**: keep each screen in its own directory (co-locate styles/tests/helpers if needed).
- **Screens can own API + rendering**: screens may call APIs via `src/services` and decide what to render.
- **Move complexity to modules**: when business logic becomes complex (multi-step flows, heavy state, shared domain logic), extract it into `src/modules` so the screen stays readable.
- **Use shared UI primitives**: prefer `src/components/ui` for consistent styling and behavior.
- **Name consistently**: use `PascalCase` folders/components and export `*Screen` from `src/screens/index.tsx` for navigator usage.

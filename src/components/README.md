## `src/components`

This folder contains **reusable React Native components** used across screens and modules.

It includes:

- **UI primitives** (building blocks like Button/Input/Search) meant to be reused everywhere.
- **Shared app components** (navigation, menus, reusable sections) that are not tied to a single screen.

## Rules when editing this folder

- **No screens here**: route-level screens live in `src/screens`.
- **Prefer UI primitives**: build new UI on top of `src/components/ui` for consistent styling/behavior.
- **Keep components reusable**: avoid hardcoding screen-specific assumptions (navigation params, feature-only state).
- **Typed props**: export clear TypeScript props for every component.
- **Export via the barrel**: expose shared components from `src/components/index.ts` to keep imports consistent.




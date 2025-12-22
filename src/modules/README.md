## `src/modules`

This folder contains **feature modules** used by screens when a view becomes too complex.

## When to create a module

- A screen has **complex business logic** (multi-step flows, heavy state, lots of branching).
- Logic needs to be **shared** across multiple screens.
- You want a feature to expose a **clean, reusable API** (components/hooks) to screens.

## Rules when editing this folder

- **Keep modules feature-scoped**: don’t create “mega modules” that mix unrelated features.
- **Use services for API calls**: call APIs via `src/services` (don’t inline HTTP clients in modules).
- **Reuse UI primitives**: prefer `src/components/ui` for consistent styling and behavior.
- **Avoid navigation side effects**: let screens control navigation.




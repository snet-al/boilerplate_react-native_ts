## `src/layouts`

This folder contains **layout shells** that wrap screens with shared structure (navigation, headers/sidebars, spacing).

Layouts define the shared app **frame** around a screen and render screen content via `children`.

## Rules when editing this folder

- **Structure only**: keep layouts focused on UI chrome; business logic and API calls belong in screens/modules (and `src/services`).
- **Accept `children`**: layouts should stay generic and not hardcode screen-specific UI.
- **Reuse UI primitives**: prefer `src/components/ui` instead of re-implementing buttons/inputs, etc.
- **Keep state minimal**: only layout-level state (e.g., side menu toggle), not feature state.
- **Export via the barrel**: expose layouts from `src/layouts/index.ts` for consistent imports.




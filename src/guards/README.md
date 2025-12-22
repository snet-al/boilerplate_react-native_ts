## `src/guards`

This folder contains **navigation guards**: small components that decide whether a screen tree can render (usually based on authentication) and otherwise redirect.

Guards are used by the navigator (`src/navigator`) to keep access control consistent across the app.

## Rules when editing this folder

- **Keep guards thin**: only access checks + redirects (no feature logic, no data fetching).
- **Accept `children`**: guards wrap screen trees and should render `children` when allowed.
- **Use navigation resets**: when redirecting, reset the stack so users cannot back-navigate into protected screens.
- **Export via the barrel**: expose guards from `src/guards/index.ts`.




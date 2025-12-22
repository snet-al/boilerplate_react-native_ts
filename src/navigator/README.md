# `src/navigator`

This folder contains the app’s **central route table** (React Navigation stack).

## What `index.tsx` does

`src/navigator/index.tsx` exports `Navigator`, which configures the native stack and wires guards/layouts.

- **Private routes**: wrapped with `PrivateGuard` (requires authentication).
- **Public routes**: wrapped with `PublicGuard`.
- **App shell**: authenticated routes render inside `AppShellLayout` with shared `menuItems`.

## Rules when editing this file

- **Use the correct guard**: use `PrivateGuard` for protected screens and `PublicGuard` for auth-free flows.
- **Keep names consistent**: stack screen names must match `AppStackParamList` keys and any menu item paths.
- **Don’t put business logic here**: keep this file purely declarative routing (no data fetching, no side effects beyond navigation config).
- **Keep params typed**: update `AppStackParamList` when adding routes and align navigator imports.




## `src/store`

This folder contains the app’s **global state management** (Redux Toolkit).

Use it for **cross-screen, shared state** (e.g., authentication/session, current user, feature flags). Local UI state should stay inside screens or feature modules.

## Rules when editing this folder

- **Only store truly global state**: if a state is used by one screen/component, keep it local.
- **Keep state serializable**: no Promises, class instances, native handles, etc.
- **Prefer slices**: model state using Redux Toolkit slices in `src/store/redux/slices`.
- **Async work lives outside reducers**: use services; reducers should stay synchronous.
- **Use typed hooks**: consume the store via `src/store/redux/hooks.ts`.




## `src/libs`

This folder contains **low-level infrastructure wrappers** (HTTP clients, sockets, third-party adapters).

## Rules when editing this folder

- **No React here**: no components, hooks, or UI concerns.
- **Wrap infrastructure only**: keep this for third-party clients/adapters (HTTP, sockets, storage, etc.).
- **Single entry point per lib**: export one public wrapper per lib (e.g., `HttpClient`).




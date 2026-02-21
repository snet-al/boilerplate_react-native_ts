# Authentication Feature

Complete authentication implementation for the Expo app with secure token management and protected routing.

## Architecture

### File Structure
```
features/auth/
├── types.ts      # TypeScript interfaces and types
├── store.ts      # Zustand store for auth state
├── api.ts        # API functions for auth endpoints
├── hooks.ts      # React hooks for auth functionality
└── README.md     # This file
```

## Features

### ✅ Zustand Auth Store
- Client-side state management for authentication
- Automatic state persistence to secure storage
- Methods: `login`, `logout`, `initialize`, `refreshTokens`

### ✅ Secure Token Persistence
- Uses `expo-secure-store` for encrypted token storage
- Stores access token, refresh token, and user data
- Platform-aware (native only, warns on web)

### ✅ Login API
- Complete API client with axios
- Automatic token injection in requests
- Token refresh flow on 401 errors
- Request queue during token refresh

### ✅ Protected Routing
- Automatic redirect to login for unauthenticated users
- Automatic redirect to tabs for authenticated users
- Loading state during auth initialization
- Implemented in `app/_layout.tsx`

## Usage

### 1. Initialize Auth (Already Done)

The auth store is automatically initialized in the root layout:

```typescript
// app/_layout.tsx
export default function RootLayout() {
  useAuthInitialize(); // Loads stored auth state on app start
  return <RootLayoutNav />;
}
```

### 2. Login Screen (Already Created)

See `app/(auth)/login.tsx` for a complete example.

```typescript
import { useLogin } from '@/features/auth/hooks';

const { login, isLoading } = useLogin();

await login({ email: 'user@example.com', password: 'password' });
```

### 3. Access Auth State

```typescript
import { useAuth } from '@/features/auth/hooks';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <View>
      <Text>Welcome {user?.name}</Text>
      <Button onPress={logout}>Logout</Button>
    </View>
  );
}
```

### 4. Protected Routes

Protected routing is automatic. All routes under `app/(tabs)` are protected and require authentication.

### 5. Making Authenticated API Calls

```typescript
import { apiClient } from '@/services/apiClient';

// Token is automatically added to headers
const data = await apiClient.get('/api/protected-endpoint');
```

## API Endpoints

Configure your API base URL in `.env`:

```bash
EXPO_PUBLIC_API_URL=https://api.example.com
```

### Expected Endpoints

Your backend should implement these endpoints:

#### POST /auth/login
```typescript
Request: { email: string; password: string }
Response: {
  user: { id: string; email: string; name: string },
  tokens: { accessToken: string; refreshToken: string }
}
```

#### POST /auth/logout
```typescript
Request: {} (uses auth header)
Response: void
```

#### POST /auth/refresh
```typescript
Request: { refreshToken: string }
Response: { accessToken: string; refreshToken: string }
```

#### GET /auth/profile
```typescript
Request: {} (uses auth header)
Response: { id: string; email: string; name: string }
```

## Security Features

1. **Secure Storage**: Tokens stored using expo-secure-store with hardware encryption
2. **Token Refresh**: Automatic token refresh on 401 errors
3. **Request Queue**: Failed requests queued during token refresh and retried
4. **Timeout Protection**: 10s timeout on API requests
5. **Clean Logout**: Complete data cleanup on logout

## Testing

### Mock Login (Development)

For development/testing without a backend, you can mock the login API:

```typescript
// features/auth/api.ts
export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // Mock response for development
    return {
      user: {
        id: '1',
        email: credentials.email,
        name: 'Test User',
      },
      tokens: {
        accessToken: 'mock_access_token',
        refreshToken: 'mock_refresh_token',
      },
    };
  },
  // ... other methods
};
```

## Customization

### Add New Auth Fields

1. Update types in `features/auth/types.ts`
2. Update store in `features/auth/store.ts`
3. Update API in `features/auth/api.ts`

### Add Registration

Already scaffolded in `features/auth/api.ts`:

```typescript
const result = await authApi.register({
  email: 'user@example.com',
  password: 'password',
  name: 'John Doe',
});
```

### Custom Auth Hook

```typescript
// In your component
import { useAuthStore } from '@/features/auth/store';

const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
const user = useAuthStore((state) => state.user);
```

## Troubleshooting

### "SecureStore not available on web"
- Expected behavior - expo-secure-store only works on iOS/Android
- For web, consider using AsyncStorage or browser localStorage

### Auto-redirect not working
- Ensure `useAuthInitialize()` is called in root layout
- Check that route groups match: `(auth)` and `(tabs)`

### Token refresh failing
- Verify your backend `/auth/refresh` endpoint
- Check that refresh token is being stored correctly
- Review apiClient interceptor logic

## Best Practices

1. **Never store tokens in plain state** - Always use secure storage
2. **Always use apiClient for requests** - Ensures token management
3. **Handle errors gracefully** - Show user-friendly messages
4. **Test logout flow** - Ensure complete data cleanup
5. **Validate tokens on backend** - Don't trust client-side auth alone


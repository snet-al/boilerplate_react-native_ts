import { useEffect } from 'react';
import { useAuthStore } from './store';
import { LoginCredentials } from './types';

/**
 * Hook to access auth state and actions
 */
export const useAuth = () => {
  const store = useAuthStore();

  return {
    user: store.user,
    isAuthenticated: store.isAuthenticated,
    isLoading: store.isLoading,
    isInitialized: store.isInitialized,
    login: store.login,
    logout: store.logout,
  };
};

/**
 * Hook to require authentication
 * Optionally redirects to login if not authenticated
 */
export const useRequireAuth = () => {
  const { isAuthenticated, isInitialized } = useAuth();

  return {
    isAuthenticated,
    isInitialized,
    isReady: isInitialized && isAuthenticated,
  };
};

/**
 * Hook to initialize auth on app start
 * Call this in your root layout
 */
export const useAuthInitialize = () => {
  const initialize = useAuthStore((state) => state.initialize);
  const isInitialized = useAuthStore((state) => state.isInitialized);

  useEffect(() => {
    if (!isInitialized) {
      initialize();
    }
  }, [initialize, isInitialized]);

  return { isInitialized };
};

/**
 * Hook for login form
 */
export const useLogin = () => {
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      await login(credentials);
      return { success: true, error: null };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      return { success: false, error: message };
    }
  };

  return {
    login: handleLogin,
    isLoading,
  };
};


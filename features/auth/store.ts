import { create } from 'zustand';
import { AuthStore, User, LoginCredentials, AuthTokens } from './types';
import { storage } from '@/services/storage';
import { authApi } from './api';

const initialState = {
  user: null,
  tokens: null,
  isAuthenticated: false,
  isLoading: false,
  isInitialized: false,
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  ...initialState,

  initialize: async () => {
    try {
      set({ isLoading: true });

      const [user, accessToken, refreshToken] = await Promise.all([
        storage.getUser<User>(),
        storage.getAccessToken(),
        storage.getRefreshToken(),
      ]);

      if (user && accessToken && refreshToken) {
        set({
          user,
          tokens: { accessToken, refreshToken },
          isAuthenticated: true,
          isInitialized: true,
          isLoading: false,
        });
      } else {
        set({
          ...initialState,
          isInitialized: true,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error('Failed to initialize auth:', error);
      set({
        ...initialState,
        isInitialized: true,
        isLoading: false,
      });
    }
  },

  login: async (credentials: LoginCredentials) => {
    try {
      set({ isLoading: true });

      const response = await authApi.login(credentials);

      // Save to secure storage
      await Promise.all([
        storage.saveTokens(response.tokens.accessToken, response.tokens.refreshToken),
        storage.saveUser(response.user),
      ]);

      set({
        user: response.user,
        tokens: response.tokens,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });

      // Call logout API (optional - server-side token invalidation)
      try {
        await authApi.logout();
      } catch (error) {
        // Continue with local logout even if API call fails
        console.warn('Logout API call failed:', error);
      }

      // Clear local storage
      await storage.clear();

      set({
        ...initialState,
        isInitialized: true,
        isLoading: false,
      });
    } catch (error) {
      console.error('Logout failed:', error);
      set({ isLoading: false });
      throw error;
    }
  },

  refreshTokens: async () => {
    try {
      const { tokens } = get();
      if (!tokens?.refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await authApi.refreshToken(tokens.refreshToken);

      await storage.saveTokens(response.accessToken, response.refreshToken);

      set({
        tokens: response,
      });
    } catch (error) {
      // If refresh fails, logout the user
      await get().logout();
      throw error;
    }
  },
}));


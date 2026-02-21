import { apiClient } from '@/services/apiClient';
import { AuthResponse, LoginCredentials, AuthTokens } from './types';

/**
 * Auth API functions
 * All authentication-related API calls
 */
export const authApi = {
  /**
   * Login with email and password
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/login', credentials);
  },

  /**
   * Logout (optional - for server-side token invalidation)
   */
  logout: async (): Promise<void> => {
    return apiClient.post<void>('/auth/logout');
  },

  /**
   * Refresh access token using refresh token
   */
  refreshToken: async (refreshToken: string): Promise<AuthTokens> => {
    return apiClient.post<AuthTokens>('/auth/refresh', { refreshToken });
  },

  /**
   * Get current user profile
   */
  getProfile: async (): Promise<AuthResponse['user']> => {
    return apiClient.get<AuthResponse['user']>('/auth/profile');
  },

  /**
   * Register new user (optional)
   */
  register: async (data: {
    email: string;
    password: string;
    name: string;
  }): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/register', data);
  },
};


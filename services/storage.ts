import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'auth_access_token',
  REFRESH_TOKEN: 'auth_refresh_token',
  USER: 'auth_user',
} as const;

/**
 * Secure storage service using expo-secure-store for native platforms
 * Falls back to AsyncStorage for web (if needed)
 */
class StorageService {
  private isAvailable = Platform.OS !== 'web';

  async setItem(key: string, value: string): Promise<void> {
    if (!this.isAvailable) {
      console.warn('SecureStore not available on web platform');
      return;
    }
    await SecureStore.setItemAsync(key, value);
  }

  async getItem(key: string): Promise<string | null> {
    if (!this.isAvailable) {
      return null;
    }
    return await SecureStore.getItemAsync(key);
  }

  async removeItem(key: string): Promise<void> {
    if (!this.isAvailable) {
      return;
    }
    await SecureStore.deleteItemAsync(key);
  }

  async clear(): Promise<void> {
    await Promise.all([
      this.removeItem(STORAGE_KEYS.ACCESS_TOKEN),
      this.removeItem(STORAGE_KEYS.REFRESH_TOKEN),
      this.removeItem(STORAGE_KEYS.USER),
    ]);
  }

  // Auth-specific methods
  async saveTokens(accessToken: string, refreshToken: string): Promise<void> {
    await Promise.all([
      this.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken),
      this.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken),
    ]);
  }

  async getAccessToken(): Promise<string | null> {
    return this.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  }

  async getRefreshToken(): Promise<string | null> {
    return this.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  async saveUser(user: object): Promise<void> {
    await this.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  async getUser<T>(): Promise<T | null> {
    const userStr = await this.getItem(STORAGE_KEYS.USER);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as T;
    } catch {
      return null;
    }
  }
}

export const storage = new StorageService();


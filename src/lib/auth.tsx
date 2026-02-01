import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { fetcher } from './api';

interface User {
  id: string;
  username: string;
  email: string;
  email_verified: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 检查用户是否已登录
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // 获取用户信息
          const userData = await fetcher.get<User>('/auth/me');
          setUser(userData);
        }
      } catch (error) {
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // 登录
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await fetcher.post<{
        access_token: string;
        token_type: string;
        user_id: string;
        username: string;
      }>('/auth/login', {
        username: email, // 注意：后端使用OAuth2PasswordRequestForm，所以这里用username字段
        password,
      });

      localStorage.setItem('token', response.access_token);
      
      // 获取完整用户信息
      const userData = await fetcher.get<User>('/auth/me');
      setUser(userData);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // 注册
  const register = async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await fetcher.post<{
        access_token: string;
        token_type: string;
        user_id: string;
        username: string;
      }>('/auth/register', {
        username,
        email,
        password,
      });

      localStorage.setItem('token', response.access_token);
      
      // 获取完整用户信息
      const userData = await fetcher.get<User>('/auth/me');
      setUser(userData);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // 登出
  const logout = async () => {
    fetcher.post('/auth/logout').catch(() => {
      // Ignore logout API errors and proceed with local logout
    });
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/login';
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

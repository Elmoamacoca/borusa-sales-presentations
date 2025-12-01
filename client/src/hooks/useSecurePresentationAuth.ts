import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '';

export function useSecurePresentationAuth(slug: string) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, [slug]);

  const checkAuth = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/auth/presentation/${slug}/verify`,
        { withCredentials: true }
      );
      setIsAuthenticated(response.data.authenticated);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (password: string): Promise<boolean> => {
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/presentation/login`,
        { slug, password },
        { withCredentials: true }
      );
      
      if (response.data.success) {
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, logout };
}

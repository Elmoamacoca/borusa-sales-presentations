import { useState, useEffect } from 'react';
import { DASHBOARD_CREDENTIALS } from '@/config/presentations.config';

const DASHBOARD_AUTH_KEY = 'borusa_dashboard_auth';

export function useDashboardAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(DASHBOARD_AUTH_KEY) === 'true';
  });

  const login = (username: string, password: string): boolean => {
    if (
      username === DASHBOARD_CREDENTIALS.username &&
      password === DASHBOARD_CREDENTIALS.password
    ) {
      localStorage.setItem(DASHBOARD_AUTH_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(DASHBOARD_AUTH_KEY);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}

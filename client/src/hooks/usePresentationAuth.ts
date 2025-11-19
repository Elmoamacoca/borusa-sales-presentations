import { useState } from 'react';
import { validatePresentationPassword } from '@/config/presentations.config';

export function usePresentationAuth(slug: string) {
  const storageKey = `borusa_presentation_auth_${slug}`;
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(storageKey) === 'true';
  });

  const login = (password: string): boolean => {
    if (validatePresentationPassword(slug, password)) {
      localStorage.setItem(storageKey, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(storageKey);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}

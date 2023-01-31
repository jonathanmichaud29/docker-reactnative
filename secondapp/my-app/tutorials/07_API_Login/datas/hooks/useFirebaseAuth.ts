import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth/react-native';

import { firebaseAuth } from '../firebaseConfig';

export function useAuthentication() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
      
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);
  
  return {
    user
  };
}
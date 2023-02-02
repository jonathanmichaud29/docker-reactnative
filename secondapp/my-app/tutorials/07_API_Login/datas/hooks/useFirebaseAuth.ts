import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth/react-native';

import { firebaseAuth } from '../firebaseConfig';

export function useAuthentication() {
  const [user, setUser] = useState<User>();
  const [verified, setVerified] = useState<boolean>(false);

  useEffect(() => {
    
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // console.warn("NEW USER LOGGED IN", user.emailVerified)
        setUser(user);
        setVerified(user.emailVerified)
      } else {
        setUser(undefined);
        setVerified(false);
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);

  useEffect(() => {
    // TODO: Always trigger once, we should find a better approach to avoid duplicate email validation requests
    //    when a new logged in user is already validated
    if( verified || user === undefined) {
      return ;
    }

    // console.log("useAuthentication verified", verified);
    const unsubscribeSetInterval = setInterval( async () => {
      await firebaseAuth.currentUser?.reload();
      const isEmailVerified = firebaseAuth.currentUser?.emailVerified || false;
      // console.log("reload done", isEmailVerified);
      if( isEmailVerified ) {
        // Need a clear interval here so the interval does not trigger anymore.
        clearInterval(unsubscribeSetInterval);
      }
      setVerified(isEmailVerified);
    }, 5000);
    return () => clearInterval(unsubscribeSetInterval);
  },[user])
  
  return {
    user,
    verified
  };
}
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(false);
  const { firebaseauth } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebaseauth.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(true);
      } else {
        localStorage.removeItem('authUser');
        setUser(false);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
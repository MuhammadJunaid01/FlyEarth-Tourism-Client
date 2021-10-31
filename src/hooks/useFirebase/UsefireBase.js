import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import FireBaseAuthentication from "./../../firebase/firebaseInit/FireBaseAuthentication";
FireBaseAuthentication();
const UsefireBase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const LoginWithGoole = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentLogedUser) => {
      if (currentLogedUser) {
        setUser(currentLogedUser);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const LogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    LoginWithGoole,
    error,
    setError,
    LogOut,
  };
};

export default UsefireBase;

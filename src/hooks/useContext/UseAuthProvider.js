import { createContext } from "react";
import UsefireBase from "./../useFirebase/UsefireBase";

export const AuthContext = createContext();
const UseAuthProvider = ({ children }) => {
  const firebaseContext = UsefireBase();
  return (
    <AuthContext.Provider value={firebaseContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default UseAuthProvider;

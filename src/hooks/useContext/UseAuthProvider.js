import { createContext } from "react";
import UsefireBase from "./../useFirebase/UsefireBase";

export const AuthContext = createContext();
const UseAuthProvider = ({ children }) => {
  const Auth = UsefireBase();
  return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>;
};

export default UseAuthProvider;

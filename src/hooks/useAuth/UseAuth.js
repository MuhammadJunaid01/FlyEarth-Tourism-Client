import { useContext } from "react";

import { AuthContext } from "./../useContext/UseAuthProvider";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;

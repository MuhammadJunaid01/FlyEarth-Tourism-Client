import { initializeApp } from "firebase/app";
import firebaseConfig from "./../firebaseconfig/firebaseConfig";
const FireBaseAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default FireBaseAuthentication;

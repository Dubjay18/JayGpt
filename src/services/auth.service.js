import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utility/firebase";
import CustomToast from "../utility/toast/CustomToast";

export const EmailAndPasswordReg = ({
  email,
  password,
}) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      CustomToast("Success");
      // ...
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      CustomToast(error.message);
      // ..
    });
};
export const EmailAndPasswordLogin = ({
  email,
  password,
}) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      CustomToast("Success");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      CustomToast(error.message);
    });
};

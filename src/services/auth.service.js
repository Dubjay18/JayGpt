import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utility/firebase";
import CustomToast from "../utility/toast/CustomToast";

export const EmailAndPasswordReg = (
  email,
  password,
  name
) => {
  return (
    createUserWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      //   // Signed in
      //   userCredential.user
      //     .updateProfile({
      //       displayName: name,
      //     })
      //     .then(() => {
      //       CustomToast("updated successfully");
      //     })
      //     .catch((error) => {
      //       //   const errorCode = error.code;
      //       //   const errorMessage = error.message;
      //       CustomToast(error.message);
      //       // ..
      //     });

      //   // ...
      // })

      .then(() => {
        CustomToast("Success");
      })
      .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        console.log(email);
        CustomToast(error.code);
        // ..
      })
  );
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

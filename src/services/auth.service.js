import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../utility/firebase";
import CustomToast from "../utility/toast/CustomToast";
import { onAuthStateChanged } from "firebase/auth";

export function useAuthentication() {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged =
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
        } else {
          // User is signed out
          setUser(undefined);
        }
      });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user,
  };
}
export const cusSignOut = () => {
  signOut(auth)
    .then(() => {
      CustomToast("Signout successful");
    })
    .catch((error) => {
      // An error happened.
      CustomToast(error.message);
    });
};
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
export const EmailAndPasswordLogin = (email, password) => {
  console.log(email, password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      CustomToast("Login Succesful");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      CustomToast(error.message);
    });
};

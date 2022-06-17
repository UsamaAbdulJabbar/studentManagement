import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import app from "./firebaseConfig";
import {
    getDatabase,
    ref,
    set,
    onValue,
    push,
    onChildAdded,
    get,
    child,
    remove,
  } from "firebase/database";


// ** Firebase Auhtemtication ** 

const auth = getAuth(app);
const database = getDatabase(app);


let signUpUser = (obj) => {
    //validation checking

    return createUserWithEmailAndPassword(auth, obj.email, obj.password)

}

let logInUser = (obj) => {
    return signInWithEmailAndPassword(auth, obj.email, obj.password)

}

// let logOutUser = () => {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//     }).catch((error) => {
//         // An error happened.
//     });
// }

// let checkAuthUser = () => {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             // User is signed in, see docs for a list of available properties
//             // https://firebase.google.com/docs/reference/js/firebase.User
//             const uid = user.uid;
//             // ...
//         } else {
//             // User is signed out
//             // ...
//         }
//     });
// }




// *** Database ***
let sendData = (obj, nodeName, id) => {
    let reference = ref(database, `${nodeName}/${id ? id : ""}`);
    return set(reference, obj)

};

// let getData = (nodeName, props) => {
    
    
    
//     const dbRef = ref(database, nodeName);
//     return    onValue(dbRef, (snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//             const childKey = childSnapshot.key;
//             const childData = childSnapshot.val();
//             console.log(childData)
        
//             // ...
//         });
        
//     }, {
//         onlyOnce: true
//     });


// }

let getData = async (nodeName, id) => {
  const dbRef = ref(database);
  return new Promise((resolve, reject) => {
    get(child(dbRef, `${nodeName}/${id ? id : ""}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let arr;
          if (id) {
            arr = snapshot.val();
            resolve(arr);
            console.log(arr)
          } else {
            arr = Object.values(snapshot.val());
            resolve(arr);
            console.log(arr)
          }
        } else {
          reject("No Data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

let deleteData = (nodeName, id) => {
    const refrence = ref(database, nodeName + "/" + id);
    return remove(refrence);
};









export { signUpUser, logInUser, sendData,getData,deleteData};
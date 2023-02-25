import { formatData } from "utils/formatData";
import { initializeApp } from "firebase/app";
import {
    getDatabase,
    ref,
    onValue,
} from "firebase/database";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//     measurementId: process.env.REACT_APP_measurementId,
//     databaseURL: process.env.REACT_APP_databaseURL,
//   };

const firebaseConfig = {
    apiKey: "AIzaSyCvEcsp1DIMjSTeJdydjhTyZvZwtQFH6X8",
    authDomain: "metra-client-app-3c20a.firebaseapp.com",
    projectId: "metra-client-app-3c20a",
    storageBucket: "metra-client-app-3c20a.appspot.com",
    messagingSenderId: "419497190406",
    appId: "1:419497190406:web:08a53d3ed7f7dbba480f87",
    measurementId: "G-FM233BGRKM",
    databaseURL:
      "https://metra-client-app-3c20a-default-rtdb.europe-west1.firebasedatabase.app",
  };

  const firebaseConfigTest = {
    apiKey: "AIzaSyDX_E8ZY2B0oBTuZGglNpI8ZqYBx127YcM",
    // authDomain: "metra-client-app-database-default-rtdb.firebaseio.com",
    projectId: "metra-client-app-database",
    messagingSenderId: "536063250734",
    appId: "1:419497190406:web:08a53d3ed7f7dbba480f87",
    measurementId: "G-FM233BGRKM",
    databaseURL:
      "https://metra-client-app-database-default-rtdb.firebaseio.com",
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function getAdvertisementList(cb) {
    return onValue(
        ref(db, "/advertisements"),
        (snapshot) => {
            const list = formatData(snapshot.val());
            cb(list);
        },
        {
            onlyOnce: true,
        }
    );
}

export const appTest = initializeApp(firebaseConfig);
const dbTest = getDatabase(app);

export function getTestList(cb) {
    return onValue(
        ref(db, "/makes"),
        (snapshot) => {
            const list = formatData(snapshot.val());
            cb(list);
        },
        {
            onlyOnce: true,
        }
    );
}
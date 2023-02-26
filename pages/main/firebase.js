import { formatData } from 'utils/formatData';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

// const firebaseConfig = {
//     apiKey: 'AIzaSyCvEcsp1DIMjSTeJdydjhTyZvZwtQFH6X8',
//     authDomain: 'metra-client-app-3c20a.firebaseapp.com',
//     projectId: 'metra-client-app-3c20a',
//     storageBucket: 'metra-client-app-3c20a.appspot.com',
//     messagingSenderId: '419497190406',
//     appId: '1:419497190406:web:08a53d3ed7f7dbba480f87',
//     measurementId: 'G-FM233BGRKM',
//     databaseURL:
//       'https://metra-client-app-3c20a-default-rtdb.europe-west1.firebasedatabase.app',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDX_E8ZY2B0oBTuZGglNpI8ZqYBx127YcM',
  authDomain: 'metra-client-app-database.firebaseapp.com',
  databaseURL: 'https://metra-client-app-database-default-rtdb.firebaseio.com',
  projectId: 'metra-client-app-database',
  storageBucket: 'metra-client-app-database.appspot.com',
  messagingSenderId: '536063250734',
  appId: '1:536063250734:web:1d2f3d41683ea16d162abf',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function getAdvertisementList() {
  let list;
  const snapshot = await get(ref(db, '/advertisements'));
  list = formatData(snapshot.val());
  return list;
}
export async function getMakesList() {
  let list;
  const snapshot = await get(ref(db, '/makes'));
  list = snapshot.val();
  return list;
}

// export function getModelsList(cb, make) {
//   return onValue(
//     ref(db, `/makes/${make}`),
//     (snapshot) => {
//       cb(snapshot.val());
//     },
//     {
//       onlyOnce: true,
//     }
//   );
// }

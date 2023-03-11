import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, onValue } from 'firebase/database';

import { advToList, carDataMapping, isValidAdv } from 'utils';

const db = initFirebase();

function initFirebase() {
  try {
    const firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllAdvertisements() {
  try {
    const snapshot = await get(ref(db, '/advertisements'));
    if (snapshot.exists()) return advToList(snapshot.val());
    else return [];
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
export async function getFilteredAdvertisements(cb, filters) {
  try {
    return onValue(
      ref(db, '/advertisements'),
      (snapshot) => {
        if (snapshot.exists()) {
          const list = advToList(snapshot.val()).filter((adv) =>
            isValidAdv(adv, filters)
          );
          if (list.length) cb(list);
          else cb([]);
        } else cb([]);
      },
      {
        onlyOnce: true,
      }
    );
  } catch (error) {
    console.log(error.message);
    cb([]);
  }
}
export async function getAdvertisement(cb, id) {
  try {
    return onValue(
      ref(db, `/advertisements/${id}`),
      (snapshot) => {
        if (snapshot.exists()) cb(snapshot.val());
        else cb(null);
      },
      {
        onlyOnce: true,
      }
    );
  } catch (error) {
    console.log(error.message);
    cb(null);
  }
}

export async function getAllMakes() {
  try {
    const snapshot = await get(ref(db, '/makes'));
    if (snapshot.exists()) return snapshot.val();
    else return {};
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export async function setAdvMakes(cb) {
  const advList = await getAllAdvertisements();
  const advMakeList = advList.map((adv) => adv.make);
  const uniqueMakeList = [...new Set(advMakeList)];
  const mList = [
    { value: '', label: 'Марка' },
    ...carDataMapping(uniqueMakeList),
  ];
  cb(mList);
}

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, onValue } from 'firebase/database';

import { advToList } from '@/utils/getCarData';

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
    return advToList(snapshot.val());
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
export async function getFilteredAdvertisements(filters) {
  try {
    const advs = await getAllAdvertisements();
    return advs.filter((adv) =>
      filters.every(({ attribute, value }) => adv[attribute] === value)
    );
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
export async function getAdvertisement(cb, id) {
  try {
    return onValue(
      ref(db, `/advertisements/${id}`),
      (snapshot) => {
        cb(snapshot.val());
      },
      {
        onlyOnce: true,
      }
    );
  } catch (error) {
    console.log(error.message);
    cb({});
  }
}

export async function getAllMakes() {
  try {
    const snapshot = await get(ref(db, '/makes'));
    return snapshot.val();
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

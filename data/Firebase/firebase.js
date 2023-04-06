import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref } from 'firebase/database';

import { objToList as advToList, isValidAdv } from 'utils';

let db;

const initFirebase = async () => {
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
    db = getDatabase(app);
  } catch (error) {
    console.log(`DB error: ${error}`);
    db = null;
  }
};

const init = async () => {
  await initFirebase();
};

init();

const getData = async (ref) => {
  try {
    const snapshot = await get(ref);
    if (snapshot.exists()) return await snapshot.val();
    else return null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getMakesObj = async () => {
  return await getData(ref(db, '/makes'));
};

export const getAdvertisementList = async (filters = null) => {
  const data = await getData(ref(db, '/advertisements'));
  if (filters)
    return advToList(data)?.filter((adv) => isValidAdv(adv, filters));
  else return advToList(data);
};

export const getAdvertisement = async (id) => {
  return await getData(ref(db, `/advertisements/${id}`));
};

export const getAdvNameObj = async () => {
  const data = await getData(ref(db, '/advertisements'));
  const advList = advToList(data);
  const nameList = {};

  advList.forEach((adv) =>
    nameList[adv.make]
      ? nameList[adv.make].add(adv.model)
      : (nameList[adv.make] = new Set([adv.model]))
  );

  return nameList;
};

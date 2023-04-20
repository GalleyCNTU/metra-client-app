import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref, onValue } from 'firebase/database';

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
    return snapshot.val();
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
  return advToList(data);
};

export const getAdvertisement = async (id) => {
  return getData(ref(db, `/advertisements/${id}`));
};

export const getAdvNameObj = async () => {
  const advList = await getAdvertisementList();
  if (!advList) return {};
  const makes = {};

  advList.forEach((adv) => {
    makes[adv.make]
      ? makes[adv.make].push(adv.model)
      : (makes[adv.make] = [adv.model]);
  });

  Object.keys(makes).forEach((make) => {
    // eslint-disable-next-line no-undef
    makes[make] = Array.from(new Set(makes[make]));
  });
  return makes;
};

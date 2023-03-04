import Advertisement from './Advertisement';
import { getAdvertisement } from '@/data/firebase';

import { Layout } from '../../components';


const Car = () => {
  return (
    <Layout>
      <Advertisement 
      getAdvertisement={getAdvertisement}
      id={'929c3b9e-d7c5-49c5-9e9f-be6bae69f88d'}
      />
    </Layout>
  );
};

export default Car;
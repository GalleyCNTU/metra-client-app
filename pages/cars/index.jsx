import { useState } from 'react';

import {
  getAdvNameObj,
  getAdvertisementList,
  getMakesObj,
} from 'data/Firebase';
import {
  Layout,
  CarList,
  Drawer,
  Search,
  CarsDetails as Details,
} from 'components';

const Cars = ({ advertisementList, makes, avalaibleMakes }) => {
  const [advList, setAdvList] = useState(advertisementList);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} anchor="left" />
      <Layout
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setLogo={true}
        hideMediaQuery={true}
        makes={makes}
      >
        <Search
          setAdvList={setAdvList}
          avalaibleMakes={avalaibleMakes}
          advList={advertisementList}
        />
        <CarList
          advertisementList={advList}
          pagination={true}
          mobileBackgroundColor={true}
        />
        <Details isArrow={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const advertisementList = await getAdvertisementList();
  const makes = await getMakesObj();
  const avalaibleMakes = await getAdvNameObj(advertisementList);

  return {
    props: {
      advertisementList,
      makes,
      avalaibleMakes,
    },
  };
}

export default Cars;

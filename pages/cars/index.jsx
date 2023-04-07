import { useState } from 'react';

import { getAdvertisementList, getMakesObj } from 'data/Firebase';
import { Layout, CarList, Drawer } from 'components';

import { Search, Details } from './components';

const Cars = ({ advertisementList, makes }) => {
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
        <Search setAdvList={setAdvList} />
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

  return {
    props: {
      advertisementList,
      makes,
    },
  };
}

export default Cars;

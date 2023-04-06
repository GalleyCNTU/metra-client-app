import { useState } from 'react';

import { getAdvertisementList } from 'data/Firebase';
import { Layout, CarList, Drawer, Details } from 'components';

import { Search } from './components';

const Cars = ({ advertisementList }) => {
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

export async function getStaticProps() {
  const advertisementList = await getAdvertisementList();
  return {
    props: {
      advertisementList,
    },
  };
}

export default Cars;

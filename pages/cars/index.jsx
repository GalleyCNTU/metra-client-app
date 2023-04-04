import { useState } from 'react';

import { getAllAdvertisements } from '@/data/firebase';

import { Layout, Drawer, CarList } from 'components';

import { Search, Title, Details } from './components';

function Cars({ advertisementList }) {
  const [advList, setAdvList] = useState(advertisementList);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} anchor="left" />
      <Layout isOpen={isOpen} setIsOpen={setIsOpen} setLogo={true}>
        <Title setAdvList={setAdvList} />
        {/* <Search setAdvList={setAdvList} /> */}
        <CarList
          filteredAdvList={advList}
          pagination={true}
          mobileBackgroundColor={true}
        />
        <Details />
      </Layout>
    </>
  );
}

export default Cars;

export async function getStaticProps() {
  const advertisementList = await getAllAdvertisements();
  return {
    props: {
      advertisementList,
    },
  };
}

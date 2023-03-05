import { getAllAdvertisements } from '@/data/firebase';

import { Layout } from 'components'
import { Search } from './components/Search';

//images
import backgroundImage from 'public/img/rotated_background.jpg';
import { CarList } from './components/CarList';

function Cars({ advertisementList }) {
    return (
        <>
            <Layout>
                <div
                    style={{

                        width: "100%",
                        height: "100%",
                        minHeight: "860px",
                        marginBottom: 45
                    }}
                >
                    {/* <Search /> */}
                    <CarList advertisementList={advertisementList} />
                </div>
            </Layout>
        </>
    )
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
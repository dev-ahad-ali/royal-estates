import { useRef } from 'react';
import Banner from '../components/Banner/Banner';
import Properties from '../components/Properties/Properties';
import Partners from '../components/Partners/Partners';
import WhyUs from '../components/WhyUs/WhyUs';
import useData from '../Hooks/useData';

const Home = () => {
    const propertyRef = useRef();
    const { dataLoading } = useData();
    return (
        <div className='mt-[-80px]'>
            <section>
                <Banner propertyRef={propertyRef} />
            </section>
            <Properties propertyRef={propertyRef} />
            {!dataLoading && (
                <>
                    <WhyUs />
                    <Partners />
                </>
            )}
        </div>
    );
};

export default Home;

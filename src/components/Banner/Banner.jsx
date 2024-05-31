import { Spinner } from '@material-tailwind/react';
import useData from '../../Hooks/useData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation } from 'swiper/modules';
import SwiperNavigation from './SwiperNavigation/SwiperNavigation';
import Slide from './Slide/Slide';

const Banner = ({ propertyRef }) => {
    const { data, dataLoading } = useData();
    if (dataLoading) {
        return (
            <Spinner
                className='absolute left-1/2 top-1/2 h-12 w-12'
                color='amber'
            />
        );
    }
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            modules={[EffectFade, Navigation]}
            className='mySwiper'
        >
            {data.slice(0, 3).map((property) => (
                <SwiperSlide key={property.id}>
                    <Slide property={property} propertyRef={propertyRef} />
                </SwiperSlide>
            ))}
            <SwiperNavigation />
        </Swiper>
    );
};

export default Banner;

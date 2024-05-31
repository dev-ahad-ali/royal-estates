import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const SwiperNavigation = () => {
    const swiper = useSwiper();
    return (
        <div className='absolute bottom-[105px] left-1/2 z-10 mx-auto flex w-full -translate-x-1/2 items-center justify-between md:w-3/4'>
            <button onClick={() => swiper.slidePrev()}>
                <FaAngleDoubleLeft className='text-[50px] text-amber-700 duration-300 hover:pe-2' />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <FaAngleDoubleRight className='text-[50px] text-amber-700 duration-300 hover:ps-2' />
            </button>
        </div>
    );
};

export default SwiperNavigation;

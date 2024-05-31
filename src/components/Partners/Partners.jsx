import { HiHomeModern } from 'react-icons/hi2';
import { RiBuilding2Line } from 'react-icons/ri';
import { SiExpertsexchange, SiMusescore } from 'react-icons/si';

const Partners = () => {
    return (
        <section className='mt-8 bg-gray-400 bg-opacity-25 py-8 md:mt-24'>
            <h2 className='text-center font-playfair text-4xl'>Our Partners</h2>
            <div className='mx-auto mt-12 grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-4 '>
                <div data-aos='fade-right' data-aos-duration='500'>
                    <div className='group flex cursor-pointer items-center gap-3 p-3 duration-300 hover:-translate-y-3'>
                        <RiBuilding2Line className='text-[60px] group-hover:text-orange-900' />
                        <div>
                            <h3 className='text-2xl uppercase'>High-Rise</h3>
                            <p className='text-2xl'>REAL ESTATE</p>
                        </div>
                    </div>
                </div>
                <div
                    data-aos='fade-right'
                    data-aos-duration='500'
                    data-aos-delay='200'
                >
                    <div className='group flex cursor-pointer items-center gap-3 p-3 duration-300 hover:-translate-y-3'>
                        <SiMusescore className='text-[60px] group-hover:text-blue-600' />
                        <div>
                            <h3 className='text-2xl'>MARK & CO.</h3>
                            <h3 className='text-2xl'>BUILDINGS</h3>
                        </div>
                    </div>
                </div>
                <div
                    data-aos='fade-right'
                    data-aos-duration='500'
                    data-aos-delay='400'
                >
                    <div className='group flex cursor-pointer items-center gap-3 p-3 duration-300 hover:-translate-y-3'>
                        <SiExpertsexchange className='text-[60px] group-hover:text-green-600' />
                        <div>
                            <h3 className='text-2xl'>REAL ESTATE</h3>
                            <h3 className='text-2xl'>EXPERTS</h3>
                        </div>
                    </div>
                </div>
                <div
                    data-aos='fade-right'
                    data-aos-duration='500'
                    data-aos-delay='600'
                >
                    <div className='group flex cursor-pointer items-center gap-3 p-3 duration-300 hover:-translate-y-3'>
                        <HiHomeModern className='text-[60px] group-hover:text-purple-600' />
                        <div>
                            <h3 className='text-2xl'>HOME DESIGN</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;

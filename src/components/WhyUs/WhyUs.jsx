import { FaHandshake } from 'react-icons/fa';
import { FaBuildingWheat } from 'react-icons/fa6';
import { PiCertificateBold } from 'react-icons/pi';
import { TbHomeDollar } from 'react-icons/tb';

const WhyUs = () => {
    return (
        <section className='md:py-6'>
            <h2 className='text-center font-playfair text-4xl underline'>
                Why Choose Us
            </h2>
            <div className='mx-auto mt-4 grid max-w-7xl grid-cols-1 gap-4 px-5 md:mt-0 lg:grid-cols-3'>
                <div className='flex items-end gap-3'>
                    <FaBuildingWheat className='text-[150px] text-green-500' />
                    <div>
                        <h3 className='text-xl underline underline-offset-4'>
                            WIDE RANGE OF PROPERTIES
                        </h3>
                        <p className='mt-1 font-light'>
                            With a robust selection of popular properties on
                            hand, as well as leading properties from experts
                        </p>
                    </div>
                </div>
                <div className='flex items-end gap-3'>
                    <TbHomeDollar className='text-[150px] text-yellow-700' />
                    <div>
                        <h3 className='text-xl underline underline-offset-4'>
                            FINANCING MADE EASY
                        </h3>
                        <p className='mt-1 font-light'>
                            Our stress-free finance department that can find
                            financial solutions to save you money.
                        </p>
                    </div>
                </div>
                <div className='flex items-end gap-3'>
                    <FaHandshake className='text-[150px] text-blue-500' />
                    <div>
                        <h3 className='text-xl underline underline-offset-4'>
                            TRUSTED BY THOUSANDS
                        </h3>
                        <p className='mt-1 font-light'>
                            10 new offers every day. 350 offers on site, trusted
                            by a community of thousands of users.
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-3 lg:flex lg:justify-center'>
                    <div className='flex items-end gap-3 lg:max-w-[403px]'>
                        <PiCertificateBold className='text-[150px] text-teal-500' />
                        <div>
                            <h3 className='text-xl underline underline-offset-4'>
                                TRANSPARENCY
                            </h3>
                            <p className='mt-1 font-light'>
                                You and your landlord always see the same info,
                                and you will get all important information
                                directly to your post office
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

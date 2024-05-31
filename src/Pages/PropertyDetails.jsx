import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../Hooks/useData';
import { FaCaretRight } from 'react-icons/fa';

const PropertyDetails = () => {
    const { propertyId } = useParams();
    const { data } = useData();
    const [singleData, setSingleData] = useState({});

    useEffect(() => {
        if (data) {
            const singlePropertyData = data.find(
                (item) => item.id == propertyId,
            );
            if (singlePropertyData) {
                setSingleData(singlePropertyData);
            }
        }
        window.scrollTo(0, 0);
    }, [data, propertyId]);

    const {
        image,
        estate_title,
        area,
        price,
        status,
        location,
        description,
        segment_name,
        facilities = [],
    } = singleData;

    return (
        <section className='mx-auto max-w-7xl px-5 py-6'>
            <h2 className='font-great text-4xl'>
                A Luxurious <span className='capitalize'>{segment_name}</span>
            </h2>
            <div
                data-aos='fade-right'
                data-aos-duration='1500'
                className='mt-8 grid gap-6 lg:grid-cols-2'
            >
                <img className='h-full w-full' src={image} alt='' />
                <div>
                    <h2 className='border-b-2 pb-2 font-playfair text-4xl'>
                        {estate_title}
                    </h2>
                    <p className='mt-4 font-light'>{description}</p>
                </div>
            </div>
            <div
                data-aos='fade-down'
                data-aos-duration='700'
                data-aos-delay='500'
                className='mt-6 border border-amber-600 p-4'
            >
                <div className='grid gap-6 md:grid-cols-2'>
                    <div className='space-y-4'>
                        <h3 className='font-playfair text-2xl font-medium'>
                            Location :{' '}
                            <span className='font-noto font-light capitalize'>
                                {location}
                            </span>
                        </h3>
                        <h3 className='font-playfair text-2xl font-medium'>
                            Area :{' '}
                            <span className='font-noto font-light capitalize'>
                                {area}
                            </span>
                            <sup className='font-noto font-light capitalize'>
                                2
                            </sup>
                            <span className='font-noto font-light capitalize'>
                                ft
                            </span>
                        </h3>
                        <h3 className='font-playfair text-2xl font-medium'>
                            Available For :{' '}
                            <span className='font-noto font-light capitalize'>
                                {status}
                            </span>
                        </h3>
                        <h3 className='font-playfair text-2xl font-medium'>
                            Price : $
                            <span className='font-noto font-light capitalize'>
                                {price}
                            </span>
                        </h3>
                    </div>
                    <div>
                        <h2 className='font-playfair text-3xl underline underline-offset-8'>
                            Features :
                        </h2>
                        <ul className='mt-3 space-y-2 ps-3'>
                            {facilities.map((facility, idx) => (
                                <li
                                    className='flex items-center gap-2 font-noto text-xl font-light capitalize'
                                    key={idx}
                                >
                                    <FaCaretRight />
                                    {facility}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='mt-6 text-end text-xs '>
                    <h4>
                        This Property is licensed by{' '}
                        <span className='font-great text-amber-600'>Royal</span>{' '}
                        <span className='font-playfair'>Estates</span>
                    </h4>
                </div>
            </div>
        </section>
    );
};

export default PropertyDetails;

import { Button } from '@material-tailwind/react';
import { FaArrowTurnDown } from 'react-icons/fa6';

const Slide = ({ property, propertyRef }) => {
    const scrollToProperties = () => {
        propertyRef.current?.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <div className='relative -mt-[5px]'>
            <img
                className='max-h-screen min-h-screen min-w-full'
                src={property.image}
                alt=''
            />
            <section className='absolute top-1/2 w-full -translate-y-1/2'>
                <div className='mx-auto max-w-7xl px-5'>
                    <h5>Exceptional</h5>
                    <h1 className='font-playfair text-5xl lg:text-[80px]'>
                        Luxury Estates
                    </h1>
                    <p className='mt-4 max-w-[600px]'>
                        You dream location is waiting for you. And we are here
                        to make your dream come true. Join us now and begin a
                        beautiful journey.
                    </p>
                    <Button
                        onClick={scrollToProperties}
                        size='md'
                        color='gray'
                        variant='filled'
                        className='mt-6 flex items-center gap-2 font-noto text-base font-normal capitalize hover:text-amber-600'
                    >
                        View Properties{' '}
                        <FaArrowTurnDown className='text-base text-amber-600' />
                    </Button>
                </div>
            </section>
            <section className='relative bottom-24 mx-auto max-w-96 rounded-md p-4 text-center backdrop-blur-[5px]'>
                <h2 className='font-playfair md:text-xl'>
                    {property.estate_title}
                </h2>
                <p className='text-sm opacity-85'>{property.location}</p>
            </section>
        </div>
    );
};

export default Slide;

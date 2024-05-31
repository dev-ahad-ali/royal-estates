import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    const {
        image,
        estate_title,
        area,
        price,
        status,
        location,
        facilities = [],
        id,
    } = property;
    return (
        <div data-aos='zoom-in' data-aos-duration='1000'>
            <div className='relative border-b-4 border-transparent duration-300 hover:scale-105 hover:border-amber-600 hover:shadow-amber-700'>
                <span className='absolute right-2 top-2 bg-green-500 px-2 py-1 text-sm uppercase'>
                    {status}
                </span>
                <div className='h-[250px]'>
                    <img className='h-full w-full' src={image} alt='' />
                </div>
                <div className='space-y-3 bg-gray-700 bg-opacity-35 p-2 pt-3'>
                    <div className='border-b border-gray-500'>
                        <h3 className='font-playfair text-2xl'>
                            {estate_title}
                        </h3>
                        <p className='text-sm opacity-85'>{location}</p>
                    </div>
                    <div>
                        <p className='font-playfair text-xl'>
                            Area :{' '}
                            <span className='font-noto text-base'>
                                {area}
                                <sup>2</sup>ft
                            </span>
                        </p>
                        <ul className='mt-1 flex flex-wrap items-center gap-3'>
                            <p className=' font-playfair text-xl'>
                                Facilities :
                            </p>
                            {facilities.map((facility, idx) => (
                                <li
                                    className='bg rounded-md bg-gray-600 bg-opacity-50 px-2 py-1 text-sm capitalize'
                                    key={idx}
                                >
                                    {facility}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl'>${price}</p>
                        <Link
                            to={`/propertyDetails/${id}`}
                            state={estate_title}
                        >
                            <button className='bg-amber-600 bg-opacity-85 px-4 py-2 font-medium uppercase duration-300 hover:bg-red-600'>
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;

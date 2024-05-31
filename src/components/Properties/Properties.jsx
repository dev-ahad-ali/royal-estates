import { Spinner } from '@material-tailwind/react';
import useData from '../../Hooks/useData';
import PropertyCard from '../Cards/PropertyCard';

const Properties = ({ propertyRef }) => {
    const { data, dataLoading } = useData();
    return (
        <section ref={propertyRef} className='px-4 pb-16'>
            <div className='px-5 text-center'>
                <h2 className='font-playfair text-4xl font-semibold underline underline-offset-8'>
                    Listed Properties
                </h2>
            </div>
            {dataLoading ? (
                <Spinner
                    className='absolute left-1/2 top-1/2 h-12 w-12'
                    color='amber'
                />
            ) : (
                <div className='mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-7 lg:grid-cols-3'>
                    {data.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Properties;

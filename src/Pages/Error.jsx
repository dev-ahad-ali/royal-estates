import { BiChevronsLeft } from 'react-icons/bi';
import { TbHomeOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className='grid min-h-screen w-full place-items-center'>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <TbHomeOff className='text-[300px] text-brown-600' />
                </div>
                <h2 className='font-great text-[100px] leading-[100px] text-white opacity-60'>
                    404
                </h2>
                <p className='-mt-4 font-playfair text-[40px] text-white opacity-65'>
                    Page Not Found
                </p>
                <div className='absolute left-5 top-5'>
                    <Link
                        to={'/'}
                        className='group flex items-center gap-1 p-4'
                    >
                        <BiChevronsLeft className='relative text-[40px] text-amber-500 duration-300 group-hover:-translate-x-2' />
                        <span className='font-noto text-2xl font-light text-amber-500'>
                            Back Home
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;

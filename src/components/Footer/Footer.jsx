import { Typography } from '@material-tailwind/react';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useData from '../../Hooks/useData';

const Footer = () => {
    const { dataLoading } = useData();
    const { loading } = useAuth();

    if (!dataLoading && !loading) {
        return (
            <footer className='mt-8 border-t border-amber-600 pb-4 pt-6 text-center md:mt-20'>
                <div className='px-4'>
                    <Link to={'/'}>
                        <Typography className='mr-4 cursor-pointer py-1.5 font-great text-4xl text-amber-500'>
                            Royal{' '}
                            <span className='font-playfair text-3xl text-white'>
                                Estates
                            </span>
                        </Typography>
                    </Link>
                    <p className='font-light'>
                        Serving your dream locations. Join in for a beautiful
                        journey with us.
                    </p>
                </div>
                <div className='mt-4 flex items-center justify-center gap-3 px-4'>
                    <FaInstagramSquare className='cursor-pointer text-[50px] duration-300 hover:text-amber-600' />
                    <FaTwitterSquare className='cursor-pointer text-[50px] duration-300 hover:text-amber-600' />
                    <FaFacebookSquare className='cursor-pointer text-[50px] duration-300 hover:text-amber-600' />
                </div>
                <div className='mt-6 text-center'>
                    <p className='text-sm font-light'>
                        © 2024 All rights received{' '}
                        <span className='font-great text-amber-600'>Royal</span>{' '}
                        <span className='font-playfair'>Estates</span>
                    </p>
                </div>
            </footer>
        );
    }
};

export default Footer;

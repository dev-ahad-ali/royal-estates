import React from 'react';
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Spinner,
} from '@material-tailwind/react';
import { Link, NavLink } from 'react-router-dom';
import { IoLogIn } from 'react-icons/io5';
import { IoIosPersonAdd } from 'react-icons/io';
import useAuth from '../../Hooks/useAuth';
import UserMenu from './UserMenu';

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const { user, loading } = useAuth();

    React.useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className='mb-4 mt-2 flex flex-col gap-2 font-noto lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            <Typography as='li'>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'border-b border-amber-500 p-1 font-noto text-lg text-white'
                            : 'p-1 font-noto text-lg text-white hover:border-b hover:border-amber-500'
                    }
                    to={'/'}
                >
                    Home
                </NavLink>
            </Typography>
            <Typography as='li'>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'border-b border-amber-500 p-1 font-noto text-lg text-white'
                            : 'p-1 font-noto text-lg text-white hover:border-b hover:border-amber-500'
                    }
                    to={'/contact'}
                >
                    Contact Us
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <Navbar
            data-aos='fade-down'
            data-aos-duration='1000'
            className='fixed top-0 z-10 h-max max-w-full rounded-none border-none bg-transparent px-4 py-4 lg:px-8 lg:py-3'
        >
            <div className='flex items-center justify-between text-blue-gray-900'>
                <Link to={'/'}>
                    <Typography className='mr-4 cursor-pointer py-1.5 font-great text-2xl text-amber-500 md:text-4xl'>
                        Royal{' '}
                        <span className='font-playfair text-xl text-white md:text-3xl'>
                            Estates
                        </span>
                    </Typography>
                </Link>
                <div className='mr-4 hidden lg:block'>{navList}</div>
                <div className='flex items-center gap-4'>
                    <div className='hidden items-center gap-x-1 lg:flex'>
                        {loading ? (
                            <Spinner color='amber' className='me-3' />
                        ) : user ? (
                            <UserMenu />
                        ) : (
                            <Link to={'/login'}>
                                <Button
                                    size='sm'
                                    className='flex items-center gap-2 rounded-full border-2 bg-transparent font-noto text-base font-normal capitalize duration-300 hover:border-amber-500'
                                >
                                    <IoLogIn className='text-2xl text-amber-500' />
                                    LogIn
                                </Button>
                            </Link>
                        )}
                        <Link to={'/register'}>
                            <Button
                                size='sm'
                                className='flex items-center gap-2 rounded-full border-2 border-transparent bg-amber-700 bg-opacity-70 font-noto  text-base font-normal capitalize duration-300 hover:bg-opacity-100'
                            >
                                <IoIosPersonAdd className='text-2xl' />
                                Register
                            </Button>
                        </Link>
                    </div>
                    <IconButton
                        variant='text'
                        className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                className='h-6 w-6'
                                viewBox='0 0 24 24'
                                stroke='#f59e0b'
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                stroke='#f59e0b'
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                <div className='flex items-center gap-x-1'>
                    {loading ? (
                        <Spinner color='amber' className='me-3' />
                    ) : user ? (
                        <UserMenu />
                    ) : (
                        <Link to={'/login'}>
                            <Button
                                size='sm'
                                className='flex items-center gap-2 rounded-full border-2 bg-transparent font-noto text-base font-normal capitalize duration-300 hover:border-amber-500'
                            >
                                <IoLogIn className='text-2xl text-amber-500' />
                                LogIn
                            </Button>
                        </Link>
                    )}
                    <Link to={'/register'}>
                        <Button
                            size='sm'
                            className='flex items-center gap-2 rounded-full border-2 border-transparent bg-amber-700 bg-opacity-70 font-noto  text-base font-normal capitalize duration-300 hover:bg-opacity-100'
                        >
                            <IoIosPersonAdd className='text-2xl' />
                            Register
                        </Button>
                    </Link>
                </div>
            </Collapse>
        </Navbar>
    );
}

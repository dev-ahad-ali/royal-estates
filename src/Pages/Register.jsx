import { useForm } from 'react-hook-form';
import { Card, Input, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, updateUserProfile, logOut } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { Email, Password, PhotoURL, Name } = data;

        // crate user and add photo and name
        createUser(Email, Password).then(() => {
            updateUserProfile(Name, PhotoURL).then(() => {
                toast.success('Account created successfully,Login Now!');
                reset();
                logOut();
            });
        });
    };

    // Show hide password
    const handleShow = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <section className='grid min-h-[calc(100vh-85px)] place-items-center'>
                <div className='mx-auto w-[360px] px-4 md:w-[430px]'>
                    <Card
                        color='white'
                        shadow={false}
                        className='rounded-none border border-amber-600 bg-black p-4'
                    >
                        <Typography
                            variant='h4'
                            color='white'
                            className='border-b pb-2 font-playfair text-2xl'
                        >
                            Sign Up
                        </Typography>
                        <Typography
                            color='white'
                            className='mt-1 font-noto font-light'
                        >
                            Enter your details to register.
                        </Typography>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='mb-2 mt-2'
                        >
                            <div className='mb-1 flex flex-col gap-4'>
                                <div>
                                    <Typography
                                        variant='h6'
                                        color='white'
                                        className='mb-1 font-noto text-lg font-light'
                                    >
                                        Your Name
                                    </Typography>
                                    <Input
                                        size='lg'
                                        className='w-full rounded-sm border-2 border-transparent bg-white text-black focus:border-amber-600'
                                        labelProps={{
                                            className:
                                                'before:content-none after:content-none',
                                        }}
                                        {...register('Name', {
                                            required: {
                                                value: true,
                                                message: 'Must enter a Name',
                                            },
                                        })}
                                    />
                                    {errors.Name && (
                                        <p className='font-noto text-sm font-semibold text-red-500'>
                                            {errors.Name.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Typography
                                        variant='h6'
                                        color='white'
                                        className='mb-1 font-noto text-lg font-light'
                                    >
                                        Your Email
                                    </Typography>
                                    <Input
                                        type='email'
                                        size='lg'
                                        className='w-full rounded-sm border-2 border-transparent bg-white text-black focus:border-amber-600'
                                        labelProps={{
                                            className:
                                                'before:content-none after:content-none',
                                        }}
                                        {...register('Email', {
                                            required: {
                                                value: true,
                                                message: 'Must enter an Email',
                                            },
                                        })}
                                    />
                                    {errors.Email && (
                                        <p className='font-noto text-sm font-semibold text-red-500'>
                                            {errors.Email.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Typography
                                        variant='h6'
                                        color='white'
                                        className='mb-1 font-noto text-lg font-light'
                                    >
                                        Photo URL
                                    </Typography>
                                    <Input
                                        size='lg'
                                        className='w-full rounded-sm border-2 border-transparent bg-white text-black focus:border-amber-600'
                                        labelProps={{
                                            className:
                                                'before:content-none after:content-none',
                                        }}
                                        {...register('PhotoURL', {
                                            required: {
                                                value: true,
                                                message:
                                                    'Must enter a Photo Url',
                                            },
                                        })}
                                    />
                                    {errors.PhotoURL && (
                                        <p className='font-noto text-sm font-semibold text-red-500'>
                                            {errors.PhotoURL.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Typography
                                        variant='h6'
                                        color='white'
                                        className='mb-1 font-noto text-lg font-light'
                                    >
                                        Password
                                    </Typography>
                                    <div className='relative'>
                                        <Input
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            size='lg'
                                            className='w-full rounded-sm border-2 border-transparent bg-white text-black focus:border-amber-600'
                                            labelProps={{
                                                className:
                                                    'before:content-none after:content-none',
                                            }}
                                            {...register('Password', {
                                                required: {
                                                    value: true,
                                                    message:
                                                        'Must enter a password',
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        'Password must be 6 characters long',
                                                },
                                                validate: {
                                                    includesUppercase: (v) => {
                                                        const pattern =
                                                            /(?=.*[A-Z])/;
                                                        if (!pattern.test(v)) {
                                                            return 'Password must include 1 uppercase letter';
                                                        }
                                                    },
                                                    includeLowercase: (v) => {
                                                        const pattern =
                                                            /(?=.*[a-z])/;
                                                        if (!pattern.test(v)) {
                                                            return 'Password must include 1 lowercase letter';
                                                        }
                                                    },
                                                },
                                            })}
                                        />
                                        <span
                                            className='absolute right-2 top-1/2 -translate-y-1/2 text-xl'
                                            onClick={handleShow}
                                        >
                                            {showPassword ? (
                                                <FaEye />
                                            ) : (
                                                <FaEyeSlash />
                                            )}
                                        </span>
                                    </div>
                                    {errors.Password && (
                                        <p className='font-noto text-sm font-semibold text-red-500'>
                                            {errors.Password.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <input
                                className='mt-4 w-full cursor-pointer rounded-md bg-amber-700 p-2 font-noto font-semibold uppercase text-black  duration-300 hover:bg-red-400 hover:shadow-2xl'
                                type='submit'
                                value='Register'
                            />
                            <Typography
                                color='white'
                                className='mt-4 text-center font-noto font-light'
                            >
                                Already have an account?{' '}
                                <Link
                                    to={'/login'}
                                    className='font-bold text-amber-600 hover:underline'
                                >
                                    Login
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </section>
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Zoom}
            />
        </>
    );
};

export default Register;

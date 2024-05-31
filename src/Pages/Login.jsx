import { useForm } from 'react-hook-form';
import { Card, IconButton, Input, Typography } from '@material-tailwind/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signInUser, setLoading, googleSignIn, githubSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const inputPassword = watch('Password');

    useEffect(() => {
        setLoginError('');
    }, [inputPassword]);

    const onSubmit = (data) => {
        const { Email, Password } = data;

        // Login user
        signInUser(Email, Password)
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            })
            .catch(() => {
                setLoading(false);
                setLoginError(
                    'Please check if you have entered a valid email or password',
                );
            });
    };

    // Social login
    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            })
            .catch(() => {
                setLoading(false);
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
                        shadow={false}
                        className='rounded-none border border-amber-600 bg-black p-4'
                    >
                        <Typography
                            variant='h4'
                            color='white'
                            className='border-b pb-2 font-playfair text-2xl'
                        >
                            Login
                        </Typography>
                        <Typography
                            color='white'
                            className='mt-1 font-noto font-light'
                        >
                            Enter your Email and Password to Login.
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
                                    {errors.Password ? (
                                        <p className='font-noto text-sm font-semibold text-red-500'>
                                            {errors.Password.message}
                                        </p>
                                    ) : loginError ? (
                                        <p className='font-noto text-sm font-semibold text-red-500'>
                                            {loginError}
                                        </p>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            <div className='mt-4 flex items-center justify-center gap-4'>
                                <IconButton
                                    onClick={() =>
                                        handleSocialLogin(googleSignIn)
                                    }
                                    className='rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10'
                                >
                                    <FaGoogle className='text-lg' />
                                </IconButton>
                                <IconButton
                                    onClick={() =>
                                        handleSocialLogin(githubSignIn)
                                    }
                                    className='rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10'
                                >
                                    <FaGithub className='text-lg' />
                                </IconButton>
                            </div>
                            <input
                                className='mt-4 w-full cursor-pointer rounded-md bg-amber-700 p-2 font-noto font-semibold uppercase text-black  duration-300 hover:bg-red-400 hover:shadow-2xl'
                                type='submit'
                                value='Login'
                            />
                            <Typography
                                color='white'
                                className='mt-4 text-center font-noto font-light'
                            >
                                Don&apos;t have an account?{' '}
                                <Link
                                    to={'/register'}
                                    className='font-bold text-amber-600 hover:underline'
                                >
                                    Register
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </section>
        </>
    );
};

export default Login;

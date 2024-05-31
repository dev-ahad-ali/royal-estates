import { useForm } from 'react-hook-form';
import { Card, Input, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {
    const { updateUserProfile, user, setUser } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const { PhotoURL, Name, Email } = data;

        // update profile
        updateUserProfile(Name, PhotoURL, Email).then(() => {
            setUser({
                displayName: Name,
                photoURL: PhotoURL,
                email: Email,
            });
            toast.success('Account Updated Successfully!');
        });
    };

    return (
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
                        Update Your Profile
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
                                    defaultValue={user?.displayName}
                                    className='w-full rounded-sm border-2 border-transparent bg-white text-black focus:border-amber-600'
                                    labelProps={{
                                        className:
                                            'before:content-none after:content-none',
                                    }}
                                    {...register('Name')}
                                />
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
                                    defaultValue={user?.email}
                                    disabled
                                    className='w-full rounded-sm border-2 border-transparent bg-white text-black focus:border-amber-600'
                                    labelProps={{
                                        className:
                                            'before:content-none after:content-none',
                                    }}
                                    {...register('Email')}
                                />
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
                                    defaultValue={user?.photoURL}
                                    className='w-full rounded-sm border-2 border-transparent bg-white text-black focus:border-amber-600'
                                    labelProps={{
                                        className:
                                            'before:content-none after:content-none',
                                    }}
                                    {...register('PhotoURL')}
                                />
                            </div>
                        </div>
                        <input
                            className='mt-4 w-full cursor-pointer rounded-md bg-amber-700 p-2 font-noto font-semibold uppercase text-black  duration-300 hover:bg-red-400 hover:shadow-2xl'
                            type='submit'
                            value='Update'
                        />
                        <Typography
                            color='white'
                            className='mt-4 text-center font-noto font-light'
                        >
                            Check out your-
                            <Link
                                to={'/profileDetails'}
                                className='font-bold text-amber-600 hover:underline'
                            >
                                Profile Details
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
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
        </section>
    );
};

export default EditProfile;

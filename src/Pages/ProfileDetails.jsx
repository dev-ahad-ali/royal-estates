import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from '@material-tailwind/react';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';

const ProfileDetails = () => {
    const { user } = useAuth();

    return (
        <section className='grid min-h-[calc(100vh-120px)] place-items-center px-4'>
            <Card
                data-aos='flip-left'
                data-aos-duration='500'
                className='border-2 border-amber-500 bg-gray-900 bg-opacity-90 shadow-2xl backdrop-blur-3xl duration-300 hover:shadow-amber-600 md:w-96'
            >
                <CardHeader floated={false} className='h-60'>
                    <img
                        className='h-full w-full'
                        src={user?.photoURL}
                        alt='profile-picture'
                    />
                </CardHeader>
                <CardBody className='text-center'>
                    <Typography
                        variant='h4'
                        color='white'
                        className='mb-2 font-playfair font-bold'
                    >
                        {user?.displayName}
                    </Typography>
                    <p className='font-noto font-medium text-blue-700'>
                        {user?.email}
                    </p>
                </CardBody>
                <CardFooter className='flex justify-center gap-7 pt-2'>
                    <Link to={'/editProfile'}>
                        <Button
                            size='sm'
                            color='amber'
                            className='border-2 border-transparent font-noto capitalize duration-300 hover:border-amber-500 hover:bg-transparent hover:text-white hover:shadow-none'
                        >
                            Edit
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </section>
    );
};

export default ProfileDetails;

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <Spinner className='absolute left-1/2 top-1/2 h-16 w-16 text-amber-500' />
        );
    }

    if (!user) {
        return <Navigate to={'/login'} state={location?.pathname || '/'} />;
    }

    return <>{children}</>;
};

export default PrivateRoute;

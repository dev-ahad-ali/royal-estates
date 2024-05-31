import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ContactUs from '../Pages/ContactUs';
import ProfileDetails from '../Pages/ProfileDetails';
import EditProfile from '../Pages/EditProfile';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PropertyDetails from '../Pages/PropertyDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/contact',
                element: (
                    <PrivateRoute>
                        <ContactUs />
                    </PrivateRoute>
                ),
            },
            {
                path: '/propertyDetails/:propertyId',
                element: (
                    <PrivateRoute>
                        <PropertyDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: '/profileDetails',
                element: <ProfileDetails />,
            },
            {
                path: '/editProfile',
                element: <EditProfile />,
            },
        ],
    },
]);

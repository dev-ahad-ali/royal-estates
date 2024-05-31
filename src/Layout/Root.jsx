import { Outlet, useLocation } from 'react-router-dom';
import { StickyNavbar } from '../components/Navbar/Navbar';
import { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
const Root = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = `Royal Estates | Home`;
        } else {
            const firstLetter = location.pathname.charAt(1).toUpperCase();
            const otherLetters = location.pathname.slice(2);
            const title = firstLetter + otherLetters;

            document.title = `Royal Estates | ${title}`;
        }
        if (location.state) {
            document.title = location.state;
        }
        if (location.pathname === '/login') {
            document.title = `Royal Estates | Login`;
        }
    }, [location.pathname, location.state]);

    return (
        <>
            <StickyNavbar />
            <main className='pt-[85px]'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;

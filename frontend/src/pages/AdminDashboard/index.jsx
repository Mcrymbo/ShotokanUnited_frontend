import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserPage from './userPage';
import { Profile } from '../profile';
import Loader from '../../common/Loader';
import { PageTitle } from '../../components';

const AdminPage = () => {
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <PageTitle title='su | Admin Dashboard' />
                    <Routes>
                        <Route path='/users' element={<UserPage />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </>
            )}
        </div>
    );
};

export default AdminPage;

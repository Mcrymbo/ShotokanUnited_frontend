import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserPage from './userPage';
import { Profile } from '../profile';
import Loader from '../../common/Loader';
import { PageTitle, ProtectedComponent } from '../../components';
import { Settings } from '../settings';
import { Calendar } from '../calender';
import DashboardPage from './dashboard';


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
                        <Route path='/' element={<DashboardPage />} />
                        <Route path='/users' element={ <ProtectedComponent requiredRole={1}><UserPage /></ProtectedComponent>} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/settings' element={<Settings /> }/>
                        <Route path='/calendar' element={<Calendar />} />
                    </Routes>
                </>
            )}
        </div>
    );
};

export default AdminPage;

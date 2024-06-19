import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserPage from "./userPage";
import Loader from '../../common/Loader';
import {PageTitle} from '../../components'

const AdminPage = () => {
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <>
            <Routes>
                <Route to='/users'
                element={
                    <>
                        <PageTitle title='su | users'/>
                        <UserPage />
                    </>
                }/>
            </Routes>
        </>
    );
};

export default AdminPage;
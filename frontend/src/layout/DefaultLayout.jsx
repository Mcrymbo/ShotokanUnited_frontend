import { useState, ReactNode } from 'react';
import Navbar from '../components/Navbar';
// import Header from '../components/Header/index';
// import Sidebar from '../components/Sidebar/index';

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
       <Navbar />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">          
          {/* main content */}
          <main className=''>
            <div className="mx-auto max-w-screen-lg p-4 bg-white shadow-md md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
    </div>
  );
};

export default DefaultLayout;
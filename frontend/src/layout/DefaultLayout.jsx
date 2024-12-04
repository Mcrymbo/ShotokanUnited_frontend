import Navbar from '../components/Navbar';
import FooterComponent from '../pages/landingPage/Footer';

const DefaultLayout = ({ children }) => {
   return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
       <Navbar />

       <main className=''>
            <div>
              {children}
            </div>
      </main>

      <FooterComponent />
    </div>
  );
};

export default DefaultLayout;
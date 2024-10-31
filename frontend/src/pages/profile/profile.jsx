import { FaRegUser } from "react-icons/fa";
import { Breadcrumb } from '../../components/Breadcrumbs'
import { DashboardLayout } from '../../layout'
// import { Link } from 'react-router-dom';
import { useUser } from '../../hooks';
import { cover } from '../../assets';

const Profile = () => {
  const { user } = useUser();
 
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Profile" />
      <form>
      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            width={100}
            height={100}
            src={ user?.profile?.cover_photo_url || cover }
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 bg-white  mx-auto -mt-22 h-30 w-full max-w-30 rounded-full p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2 flex justify-center items-center">
              
            { user?.profile?.profile_pic_url ? 
            <img src={user.profile.profile_pic_url} alt="profile" className='w-40 h-40 rounded-full' /> :
            <FaRegUser className="size-30 mr-2" /> }
              
          </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {`${user.last_name} ${user.first_name}` || user.username }
            </h3>
            <p className="font-medium">Admin</p>
           
            <div className="mx-auto max-w-180">
             
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>
              <p className="mt-4.5">
                { user.profile?.bio }
              </p>
            </div>
          </div>
        </div>
      </div>
      </form>
    </DashboardLayout>
  );
};

export default Profile;

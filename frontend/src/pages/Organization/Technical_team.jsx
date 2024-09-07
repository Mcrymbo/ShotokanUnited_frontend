import {commitee} from '../../constants'
import DefaultLayout from "../../layout/DefaultLayout";
import { kids_training } from "../../assets";

const TechnicalTeam = () => {
  return (
   <DefaultLayout>
    <div className='container relative'>
        <img src={kids_training} alt="training" width={100} height={100} className='w-full h-[200px] md:h-auto object-cover'/>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <h6 className='absolute text-white text-4xl bottom-0 left-0 p-4 md:p-8'>Technical Commitee</h6>
    </div>

    <div>
        <div className='flex flex-col md:flex-row items-center flex-wrap gap-4 mt-8'>
            {commitee.map((item, index) => (
                <div key={index} className='w-full md:w-auto flex flex-col gap-4 shadow-md p-4'>
                    <img src={item.photo} alt="img" width={100} height={100} className='w-full md:w-[20vw] md:h-[40vh] object-cover rounded-t-md bg-gray-300' />
                    <h2 className='text-2xl font-bold'>{item.name}</h2>
                    <h3 className='text-xl font-bold ml-2'>{item.rank}</h3>
                </div>
            ))}
        </div>
    </div>
   </DefaultLayout>
  );
};

export default TechnicalTeam;
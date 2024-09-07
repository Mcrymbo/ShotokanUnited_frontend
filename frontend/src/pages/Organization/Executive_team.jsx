import { Excommitee } from '../../constants'
import DefaultLayout from "../../layout/DefaultLayout";
import { kids_training } from "../../assets";

const ExecutiveTeam = () => {
  return (
   <DefaultLayout className='container'>
    <div className='relative'>
        <img src={kids_training} alt="training" width={100} height={100} className='w-full h-[200px] md:h-auto object-cover'/>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <h6 className='absolute text-white text-4xl bottom-0 left-0 p-4 md:p-8'>Executive Commitee</h6>
    </div>

    <div>
        <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 mt-8'>
            {Excommitee.map((item, index) => (
                <div key={index} className='flex flex-col w-full md:w-auto shadow-md p-2'>
                    <img src={item.photo} alt="img" width={40} height={40} className='w-full md:w-[210px] md:h-[160px] object-cover rounded-md bg-gray-300' />
                    <h2 className='text-xl text-center font-semibold pb-4 border-b border-gray-500'>{item.name}</h2>
                    <h3 className='text-md font-bold text-center'>{item.role}</h3>
                    <p className='text-red-500 text-center cursor-pointer hover:underline'>{item.email}</p>
                </div>
            ))}
        </div>
    </div>
   </DefaultLayout>
  );
};

export default ExecutiveTeam;
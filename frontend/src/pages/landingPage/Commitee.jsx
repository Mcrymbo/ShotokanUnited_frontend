import { commitee } from "../../constants";
import { styles } from "../../styles";

const Commitee = () => {
  return (
    <div className='bg-gradient-to-tr from-gray-200 via-gray-400 to-purple-200/80 text-gray-700 relative overflow-hidden'>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8" >
        <h2 className='text-start text-lg font-medium'>Technical team</h2>
        <div className="carousel carousel-center rounded-box bg-inherit max-w-full space-x-4 p-4 ">
          {commitee.map( (member, index) => (
            <div key={index} className="carousel-item w-full sm:w-auto outline outline-gray-500/50 rounded-md px-2">
              <div className="flex flex-col">
                <div className="text-start text-lg font-bold py-2">{member.title}</div>
                <img
                  src={member.photo} alt="Technical team"
                  title="Technical team photos"
                  loading='lazy'
                  width={240}
                  height={192}
                  className="rounded-md w-full md:h-60 object-cover object-top bg-gray-500"                  
                />
                <div className="w-full md:w-80 mt-4 text-start">
                  <div className="text-lg font-semibold">{member.name}</div>
                  <div className="text-md font-semibold text-gray-600">{member.rank}</div>
                  <p className="text-md text-gray-700">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commitee;

import { commitee } from "../../constants";
import { styles } from "../../styles";

const Commitee = () => {
  return (
    <div className='bg-blue-50'>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8" >
        <h1 className={`${styles.sectionHeadText} md:py-4`}>Technical team</h1>

        <div className="carousel carousel-center bg-inherit rounded-box max-w-full space-x-4 p-4 overflow-x-auto">
          {commitee.map((member, index) => (
            <div key={index} className="carousel-item w-full sm:w-auto shadow-md p-2">
              <div className="flex flex-col items-center">
                <h1 className="text-start text-lg font-bold py-2">{member.title}</h1>
                <img
                  src={member.photo}
                  className="rounded-md w-full sm:w-60 md:h-48 object-cover"
                />
                <div className="w-full sm:w-60 mt-4 text-start">
                  <h1 className="text-lg font-semibold">{member.name}</h1>
                  <h2 className="text-md font-semibold text-gray-600">{member.rank}</h2>
                  <p className="text-sm text-gray-700">{member.description}</p>
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
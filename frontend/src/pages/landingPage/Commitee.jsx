import { commitee } from "../../constants";
import { styles } from "../../styles";

const Commitee = () => {
  return (
    <div>
      <div className='mx-auto max-w-screen-xl text-center py-10 px-4 sm:px-6 lg:px-8'>
        <h1 className={`${styles.sectionHeadText}`}>Technical team</h1>

        <div className="carousel carousel-center rounded-box max-4-lg space-x-4 p-4">
          {commitee.map((member, index) => (
              <div key={index} className='carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-[32%] shadow-md text-left p-4'>
                <div>
                <h1 className="text-xl font-bold">{member.title}</h1>
                <img src={member.photo} alt={`${member.name}`} className="w-full h-60 object-covers mt-4" />
                <h1 className="mt-4 text-lg font-semibold">{member.name}</h1>
                <h2 className="text-md text-gray-600">{member.rank}</h2>
                <p className="mt-2 text-sm text-gray-700">{member.description}</p>
                </div>
              </div>
            ))}

        </div>

      </div> 
    </div>
  )
}

export default Commitee;

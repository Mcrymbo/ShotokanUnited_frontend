import { commitee } from "../../constants";
import { styles } from "../../styles";

const Commitee = () => {
  return (
    <div>
      <div className='mx-auto max-w-screen-lg text-center py-10 px-4 sm:px-6 lg:px-8'>
        <h1 className={`${styles.sectionHeadText}`}>Commitee Members</h1>
        <div className='flex justify-center flex-wrap gap-8 pt-8'>
          {commitee.map((member, index) => (
            <div key={index} className='w-full sm:w-1/2 lg:w-1/4 shadow-md text-left p-4'>
              <h1 className="text-xl font-bold">{member.title}</h1>
              <img src={member.photo} alt={`${member.name}`} className="w-full h-48 object-cover mt-4" />
              <h1 className="mt-4 text-lg font-semibold">{member.name}</h1>
              <h2 className="text-md text-gray-600">{member.rank}</h2>
              <p className="mt-2 text-sm text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Commitee;

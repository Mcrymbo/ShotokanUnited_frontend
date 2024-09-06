import { team_strath } from "../../assets"
import DefaultLayout from "../../layout/DefaultLayout"

const SukSquard = () => {
  return (
    <DefaultLayout>
        <div className='cover relative'>
            <img src={team_strath} alt="img" width={100} height={100} className='w-full object-cover' />
            <div className='absolute inset-0 bg-black opacity-20'></div>
            <h2 className='absolute bottom-0 left-0 p-4 text-white text-4xl'>HDKI Kenya Squard</h2>
        </div>
    </DefaultLayout>
  )
}

export default SukSquard
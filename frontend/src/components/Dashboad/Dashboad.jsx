

const Dashboad = () => {
    
    const items = [
        {
            title: '',
            image: '',
            description: '',
        }
    ]

  return (
    <div className='w-full h-screen bg-white'>
        { items && items.map((item, index) => (
            <div key={index} className='flex justify-center items-start shadow-md rounded-md'>
                <h1>{item.title}</h1>                
                <img src={item?.image} alt="" />
                <p>{item.description}</p>
            </div>
        ))}

    </div>
  )
}

export default Dashboad
import React from 'react'
import Card from '../component/Card'


const OurService = () => {
  const icons=[
    {
      "id":"1",
      "title":"Tyre Rotation",
      "url":"TyreRotionIcon.png"
    },
    {
      "id":"2",
      "title":"Tyre Fitting",
      "url":"CarRepairs.png"
    },
    {
      "id":"3",
      "title":"Nitrogen Inflation",
      "url":"Nitrogennflation.png"
    }
  ]
  return (
    <div>
        <div className='flex flex-col items-center my-5'>
          <h3 className='text-3xl font-bold'>OUR SERVICES</h3>
          <h5 className='font-medium'>Premium long lasting performance for your car</h5>
          <img src="Assets/Service_icon/Group1.png" alt="group1" className='w-28' />
        </div>
        <div className=' w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  gap-5 flex justify-center'>
        {icons.map((Icons)=>{
          return(
            <Card key={Icons.id} id={Icons.id} url={Icons.url} title={Icons.title}/>
          )

        })}
    
        </div>
    </div>
  )
}

export default OurService
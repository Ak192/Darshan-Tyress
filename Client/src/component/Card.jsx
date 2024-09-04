import React from 'react'

const Card = ({ id, title, url }) => {

  return (
     <>
      <div className='relative w-fit ' key={id}>
        <div className='absolute top-1/4 left-[37%]'>
          <img src={`Assets/Service_icon/${url}`} alt={title} className='w-[90px] first-line' />
        </div>
        <img src="Assets/Service_icon/graph.png" alt="back-ground" className='' />
        <h1 className='font-bold text-center'>{title}</h1>
      </div>
    
    
    </>
  )
}

export default Card
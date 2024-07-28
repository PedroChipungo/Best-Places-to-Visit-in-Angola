import React from 'react'

const SocialIcons = ({icons}) => {
  return (
    <div className='text-teal-500 mt-6'>
     {
         icons.map(({name,link})=>(
            <span key={name} className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5
            text-xl hover:text-gray-100 hover:bg-teal-500 duration-300'>
                 <a href={link}><ion-icon name={name}></ion-icon></a>
            </span>
        ))
     }
    </div>
  )
}

export default SocialIcons

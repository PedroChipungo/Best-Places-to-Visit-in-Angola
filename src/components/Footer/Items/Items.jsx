import React, {useState} from 'react'

const Items = ({Links, title}) => {
  return (
    <ul>
      <h1 className='mb-1 font-semibold'>{title}</h1>
      {
        Links.map(({name, content, link}) => (
          <li key={name}>
            <a className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6' href={link}>{`${name}:  ${content}`}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default Items

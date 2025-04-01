import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

const GetCoffee = (props) => {

const navigate = useNavigate();

  const handleClick = (coffee) => {
    navigate('/coffee', { state: { coffee } });
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 w-full max-w-4xl mx-auto'>
      {props.coffees.map((coffee) => (
        <div key={coffee.id} onClick={() => handleClick(coffee)} className='cursor-pointer bg-amber-600 hover:bg-amber-700 w-40 h-20 p-4 m-2 rounded-lg flex flex-col justify-center items-center transition-colors duration-300 shadow-lg'>
          <p className='text text-white'>{coffee.name}</p>
          <p className='font-medium' >R${coffee.price}</p>
        </div>

      ))}
    </div>
  )
}

export default GetCoffee
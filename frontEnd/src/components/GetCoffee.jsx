import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

const GetCoffee = (props) => {

const navigate = useNavigate();

  const handleClick = (coffee) => {
    navigate('/coffee', { state: { coffee } });
  }

  return (
    <div className='flex justify-center items-center mt-20'>
      {props.coffees.map((coffee) => (
        <div key={coffee.id} onClick={() => handleClick(coffee)} className='cursor-pointer bg-amber-600 hover:bg-amber-700 p-4 m-2 rounded-lg flex flex-col justify-center items-center transition-colors duration-300 shadow-lg'>
          <p className='text text-white'>{coffee.name}</p>
          <p className='font-medium' >R${coffee.price}</p>
        </div>
      ))}

    </div>
  )
}

export default GetCoffee
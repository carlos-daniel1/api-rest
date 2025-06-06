import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';


const GetCoffee = ({ coffees }) => {
  const navigate = useNavigate();

  const handleClick = (coffee) => {
    navigate('/coffee', { state: { coffee } });
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20 w-full max-w-4xl mx-auto'>
      {coffees.length > 0 ? (
        coffees.map((coffee) => (
          <div key={coffee.productID} onClick={() => handleClick(coffee)} className='cursor-pointer bg-[#4B2E2B] hover:bg-[#1c0908] w-48 p-4 m-2 rounded-lg flex flex-col justify-center items-center transition-colors duration-300 shadow-lg '>
            <img src={coffee.image} alt={coffee.name} className='w-32 h-32 object-cover rounded mb-2' />
            <p className='text-white text-sm font-semibold'>{coffee.name}</p>
            <p className='text-white text-sm'>${coffee.price}</p>
          </div>
        ))
      ) : (
        <p className='text-center text-[#4B2E2B] col-span-full'>No coffee available</p>
      )}
    </div>
  );
}

export default GetCoffee
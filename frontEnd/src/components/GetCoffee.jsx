import React from 'react'

const GetCoffee = (props) => {
  return (
    <div className='flex justify-center items-center mt-20'>
      {props.coffees.map((e) => (
        <div key={e.id} className='bg-amber-600 p-4 m-2 rounded-lg flex flex-col justify-center items-center'>
          <p className='text text-white'>{e.name}</p>
          <p className='font-medium' >R${e.price}</p>
        </div>
      ))}


    </div>
  )
}

export default GetCoffee
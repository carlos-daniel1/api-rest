import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/NavBar'

const CoffeePage = () => {
    const location = useLocation()
    const { coffee } = location.state

    return (
        <div className='bg-[rgb(56,56,61)] h-screen'>
            <Navbar />
            <div className='mt-10 flex flex-col items-center bg-amber-600 py-4 rounded-lg shadow-lg w-1/4 mx-auto'>
                <img src={coffee.image} alt={coffee.name} className='w-60 h-40 rounded mb-4' />
                <h1 className='font-bold text-white'>{coffee.name}</h1>
                <p className='mt-4 text-white'>Price: R${coffee.price}</p>
                <p className='mt-2'>Description: {coffee.description || 'Coffee is a greate coffeee '}</p>

            <div className='flex w-full justify-between mt-8 px-10'>
                <button className='bg-[rgb(100,58,58)] hover:bg-[rgb(58,35,35)] cursor-pointer p-2 rounded-md text-white font-medium'>Editar</button>
                <button className='bg-red-600 hover:bg-red-700 cursor-pointer p-2 rounded-md text-white font-medium'>Excluir</button>
            </div>
            </div>
        </div>



    )
}

export default CoffeePage
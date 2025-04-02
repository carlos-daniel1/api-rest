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
            </div>
        </div>



    )
}

export default CoffeePage
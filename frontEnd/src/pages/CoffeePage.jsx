import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/NavBar'

const CoffeePage = () => {
    const location = useLocation()
    const { coffee } = location.state

    return (
        <div className='bg-[rgb(56,56,61)] h-screen'>
            <Navbar />
            <div className='mt-30 flex flex-col items-center bg-amber-600 p-8 rounded-lg shadow-lg w-1/3 mx-auto'>
                <h1 className='text-lg text-white'>{coffee.name}</h1>
                <p className='text-lg mt-4 text-white'>Price: R${coffee.price}</p>
                <p className='text-lg mt-2'>Description: {coffee.description || 'No description available'}</p>
            </div>
        </div>



    )
}

export default CoffeePage
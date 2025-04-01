import React from 'react'
import { useState } from 'react'
import GetCoffee from '../components/GetCoffee';
import NavBar from '../components/NavBar';
import Modal from '../components/Modal';

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [coffees, setCoffees] = useState([
        {
            id: 1,
            name: 'express coffee',
            price: 2.4
        },
        {
            id: 2,
            name: 'chocolate coffee',
            price: 6
        },
        {
            id: 3,
            name: 'gelatto coffee',
            price: 10
        },
        {
            id: 4,
            name: 'coffe',
            price: 2.9
        },
        

    ]);


    return (
        <div className='bg-[rgb(56,56,61)] min-h-screen'>
            <NavBar />
            <GetCoffee coffees={coffees} />
            <button
                onClick={() => setOpenModal(true)}
                className='fixed right-10 cursor-pointer bottom-15 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-3xl shadow-lg transition-colors duration-300'
            >
                +
            </button>

            <Modal isOpen={openModal} closeModal={() => setOpenModal(false)}>
                <div className='flex flex-col gap-4 mt-5'>
                    <h2 className='text-center text-white text-2xl font-bold'>Adicionar Café</h2>
                    <input type="text" placeholder='Nome do café' className='p-2 rounded-lg text-white' />
                    <input type="number" placeholder='Preço do café' className='p-2 rounded-lg text-white' />

                    <button className='bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 cursor-pointer'>Adicionar</button>
                </div>
            </Modal >
        </div>

    )
}

export default Home
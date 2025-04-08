import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/NavBar'
import httpService from '../services/httpServices'
import Modal from '../components/Modal'

const CoffeePage = () => {
    const navigate = useNavigate();
    const location = useLocation()
    let { coffee } = location.state

    const [openModalEdit, setOpenModalEdit] = useState(false);

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const coffeeID = coffee.productID;
    
    const editCoffee = async () => {
        const updateCoffee = { name, price, description, image }
        console.log(updateCoffee)

        try {
            const response = await httpService.updateProduct(coffeeID, updateCoffee);
            const data = await response.json();
            coffee.name = name;
            coffee.price = price;
            coffee.description = description
            coffee.image = image;
            setOpenModalEdit(false);

        } catch (error) {
            alert(error)
        }

    }

    const deleteCoffee = async () => {
        try {
            const response = await httpService.deleteProduct(coffeeID);
            const data = await response.json();
            navigate('/home')

        } catch (error) {
            alert(error)
        }

    }

    return (
        <div className='bg-[#DCC9A6] h-screen'>
            <Navbar />
            <div className='mt-10 flex flex-col items-center bg-[#4B2E2B] py-4 rounded-lg shadow-lg w-1/4 mx-auto'>
                <img src={coffee.image} alt={coffee.name} className='w-60 h-40 rounded mb-4' />
                <h1 className='font-bold text-white'>{coffee.name}</h1>
                <p className='mt-4 text-white'>Price: R${coffee.price}</p>
                <p className='mt-2 text-white'>Description: {coffee.description || 'Coffee is a greate coffeee '}</p>

            <Modal isOpen={openModalEdit} closeModal={() => setOpenModalEdit(false)} > 
            <div className='flex flex-col gap-4'>
                    <h2 className='mt-6 text-center text-white text-2xl font-bold'>Edit Coffee</h2>
                    
                    <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder='Coffee Name' className='border-1 p-2 rounded-lg text-white' />
                    
                    <input value={price} onChange={(event) => setPrice(event.target.value)} type="number" placeholder='Price' className='border-1 p-2 rounded-lg text-white' />

                    <input value={description} onChange={(event) => setDescription(event.target.value)} type="text" placeholder='Description' className='border-1 p-2 rounded-lg text-white' />

                    <input value={image} onChange={(event) => setImage(event.target.value)} type="text" placeholder='Image' className='border-1 p-2 rounded-lg text-white' />

                    <button onClick={editCoffee} className='bg-[#B19777] hover:bg-[#897051] text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 cursor-pointer'>Edit</button>
                </div>
            </Modal>


                <div className='flex w-full justify-between mt-8 px-10'>
                    <button onClick={() => setOpenModalEdit(true)} className='bg-[#B19777] hover:bg-[#897051] cursor-pointer p-2 rounded-md text-white font-medium transition-colors duration-300'>Editar</button>
                    
                    <button onClick={deleteCoffee} className='bg-red-600 hover:bg-red-700 cursor-pointer p-2 rounded-md text-white font-medium transition-colors duration-300'>Excluir</button>
                </div>
            </div>
        </div>



    )
}

export default CoffeePage
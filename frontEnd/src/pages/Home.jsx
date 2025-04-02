import React, { useEffect } from 'react'
import { useState } from 'react'
import GetCoffee from '../components/GetCoffee';
import NavBar from '../components/NavBar';
import Modal from '../components/Modal';
import httpservice from '../services/httpServices';

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [coffees, setCoffees] = useState([]);


    useEffect(() => {
        const getCoffees = async () => {
            try {
                const response = await httpservice.getProducts();
                const data = await response.json()
                setCoffees(data)
            } catch (err) {
                console.log(err);
            }
        }

        getCoffees();
    }, []);


    const addCoffee = async (name, price) => {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        const image = `src/assets/coffee${randomNumber}.webp`

        const newCoffe = { name, price, image: image }

        try {
            const response = await httpservice.createProduct(newCoffe);
            const data = await response.json()
            console.log(data.response)
            setCoffees([...coffees, data.response])
            alert(data.msg)

        } catch (err) {
            alert('Erro ao adicionar o produto!')
            console.log(err);
        }
        setOpenModal(false);
    }


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

            <Modal isOpen={openModal} closeModal={() => setOpenModal(false)} addCoffee={addCoffee} />

        </div>

    )
}



export default Home
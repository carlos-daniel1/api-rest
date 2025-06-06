import React, { useEffect } from 'react'
import { useState } from 'react'
import GetCoffee from '../components/GetCoffee';
import NavBar from '../components/NavBar';
import Modal from '../components/Modal';
import httpservice from '../services/httpServices';

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [coffees, setCoffees] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0)


    useEffect(() => {
        const getCoffees = async () => {
            try {
                const response = await httpservice.getProducts();
                const data = await response.json()
                setCoffees(data)
            } catch (err) {
                alert('Erro ao carregar os produtos')
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
            setCoffees([...coffees, data.response])
            setName('')
            setPrice(0)
            alert(data.msg)

        } catch (err) {
            alert('Erro ao adicionar o produto!')
            console.log(err);
        }
        setOpenModal(false);
    }


    return (
        <div className='bg-[#DCC9A6] min-h-screen'>
            <NavBar />
            <GetCoffee coffees={coffees} />
            <button
                onClick={() => setOpenModal(true)}
                className='fixed right-10 cursor-pointer bottom-15 bg-[#4B2E2B] hover:bg-[#1c0908] text-white font-bold py-2 px-4 rounded-3xl shadow-lg transition-colors duration-300'
            >
                +
            </button>

            <Modal isOpen={openModal} closeModal={() => setOpenModal(false)}>
                <div className='flex flex-col gap-6 mt-5'>
                    <h2 className='mt-6 text-center text-white text-2xl font-bold'>Add Coffee</h2>
                    <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder='Coffee name' className='border-1 p-2 rounded-lg text-white' />
                    <input value={price} onChange={(event) => setPrice(event.target.value)} type="number" placeholder='Price' className='border-1 p-2 rounded-lg text-white' />

                    <button onClick={() => addCoffee(name, price)} className='bg-[#B19777] hover:bg-[#897051] text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 cursor-pointer'>Add</button>
                </div>
            </Modal>

        </div>

    )
}



export default Home
import React, { useState } from 'react'

const Modal = ({ isOpen, closeModal, addCoffee }) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0)

    if (!isOpen) {
        return null;
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50'>
            <div className='bg-[rgb(56,59,61)] w-96 h-96 rounded-lg shadow-lg p-4'>

                <div>
                    <div className='flex flex-col gap-4 mt-5'>
                        <h2 className='text-center text-white text-2xl font-bold'>Adicionar Café</h2>
                        <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder='Nome do café' className='p-2 rounded-lg text-white'  />
                        <input value={price} onChange={(event) => setPrice(event.target.value)} type="number" placeholder='Preço do café' className='p-2 rounded-lg text-white'  />

                        <button onClick={() => addCoffee(name, price)} className='bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 cursor-pointer'>Adicionar</button>
                    </div>
                </div>

                <div className="flex justify-end mt-25">
                    <button className="cursor-pointer px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800" onClick={closeModal}>
                        Fechar
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal
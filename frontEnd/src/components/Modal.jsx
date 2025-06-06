import React, { useState } from 'react'

const Modal = ({ isOpen, closeModal, children }) => {

   

    if (!isOpen) {
        return null;
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50'>
            <div className='bg-[#4B2E2B] w-96 h-96 rounded-lg shadow-lg p-4'>

                <div>
                    {children}
                </div>

                <div className="flex justify-end mt-10">
                    <button className="cursor-pointer px-4 py-2 bg-[#B19777] text-white rounded hover:bg-[#897051] transition-colors duration-300" onClick={closeModal}>
                        Fechar
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal
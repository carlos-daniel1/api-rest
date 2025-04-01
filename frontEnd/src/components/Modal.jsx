import React from 'react'

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50'>
            <div className='bg-[rgb(56,59,61)] w-96 h-96 rounded-lg shadow-lg p-4'>

                <div>
                    {children}
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
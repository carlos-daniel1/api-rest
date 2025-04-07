import React from 'react'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
            <div className="w-1/2 bg-cover" style={{backgroundImage: "url('https://img.freepik.com/fotos-premium/dia-internacional-do-cafe-4k-e-arte-incrivel_433229-35.jpg')",}}></div>
            <div className="w-1/2 flex flex-col items-center justify-center bg-[#F5EBDD] p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] text-center">
                    <h2 className="text-2xl font-bold mb-4 text-[#4B2E2B]">Registrar</h2>
                    <form>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">Nome</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite seu nome"/>
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">CPF</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite seu CPF"/>
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">Email</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite seu email"/>
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">Senha</label>
                            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Crie uma senha"/>
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">Imagem</label>
                            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Coloque o link da imagem"/>
                        </div>
                        <button type="button" className="w-full bg-[#6f4e37] text-white p-2 rounded hover:bg-[#826450] transition" onClick={() => navigate("/")}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register
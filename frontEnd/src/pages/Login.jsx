import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://img.freepik.com/fotos-premium/papel-de-parede-de-cafe-4k_937960-19.jpg')",}}></div>
            <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100 p-8">
                <div className="text-center mb-6">
                    <img className="mx-auto h-30 w-35" src="https://www.svgrepo.com/show/373517/coffeescript.svg" alt="Coffe Script"/>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#6f4e37]">Coffe Script</h2>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] text-center">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form>
                        <div className="mb-4 text-left">
                            <label className="block text-gray-700">Email</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite seu email"/>
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-gray-700">Senha</label>
                            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite sua senha"/>
                        </div>
                        <button type="button" className="w-full bg-[#6f4e37] text-white p-2 rounded hover:bg-[#826450] transition" onClick={() => navigate("/home")}>Entrar</button>
                        <p class="mt-3 text-center text-sm/6 text-gray-500">
                            Ainda não tem uma conta ? 
                            <button type="button" className="font-semibold text-[#6f4e37] hover:text-[#826450]" onClick={() => navigate("/register")}>Registrar</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
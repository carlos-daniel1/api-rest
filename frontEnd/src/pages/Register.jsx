import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import httpservice from '../services/httpServices';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState({ value: '', dirty: false });
    const [cpf, setCpf] = useState({ value: '', dirty: false });
    const [email, setEmail] = useState({ value: '', dirty: false });
    const [password, setPassword] = useState({ value: '', dirty: false });
    const [image, setImage] = useState({ value: '', dirty: false });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




    const handleErrorEmail = () => {
        if (!email.value && email.dirty) {
            return <label className="error">Campo Obrigatório *</label>;
        } else if (!emailRegex.test(email.value) && email.dirty) {
            return (<label className='error'>Email Inválido *</label>);
        } else {
            return (<label className='error'></label>);
        }
    };


    const handleErrorPassword = () => {
        if (!password.value && password.dirty) {
            return <label className="error">Campo Obrigatório *</label>;
        } else {
            return (<label className='error'></label>);
        }
    };

    const handleSubmit = async (e, ReactFormEvent) => {
        e.preventDefault();
        let hasError = false;

        if (!email.value || !emailRegex.test(email.value)) {
            setEmail({ value: email.value, dirty: true });
            hasError = true;
        }

        if (!password.value) {
            setPassword({ value: password.value, dirty: true });
            hasError = true;
        }

        if (!hasError) {
            const user = {
                name: name.value,
                cpf: cpf.value,
                email: email.value,
                password: password.value,
                image: image.value
            }
            try {
                const response = await httpservice.createUser(user);

                if (response.status === 201) {
                    alert("Usuario criado com sucesso")
                    navigate("/");
                }
            } catch (error) {
                console.error("Erro ao cadastrar usuario:", error);
                alert("Erro ao cadastrar usuario, tente novamente");
            }
        }
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-cover" style={{ backgroundImage: "url('https://img.freepik.com/fotos-premium/dia-internacional-do-cafe-4k-e-arte-incrivel_433229-35.jpg')", }}></div>
            <div className="w-1/2 flex flex-col items-center justify-center bg-[#F5EBDD] p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] text-center">
                    <h2 className="text-2xl font-bold mb-4 text-[#4B2E2B]">Registrar</h2>
                    <form>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">Nome</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite seu nome"
                                value={name.value}
                                onChange={(event) => setName({ value: event.target.value, dirty: true })} />
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">CPF</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite seu CPF"
                                value={cpf.value}
                                onChange={(event) => setCpf({ value: event.target.value, dirty: true })} />
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">Email</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite seu email"
                                value={email.value}
                                onChange={(event) => setEmail({ value: event.target.value, dirty: true })} />
                            {handleErrorEmail()}
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">Senha</label>
                            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Crie uma senha"
                                value={password.value}
                                onChange={(event) => setPassword({ value: event.target.value, dirty: true })} />
                            {handleErrorPassword()}
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-[#4B2E2B]">Imagem</label>
                            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Coloque o link da imagem"
                                value={image.value}
                                onChange={(event) => setImage({ value: event.target.value, dirty: true })} />
                        </div>
                        <button type="button" className="w-full bg-[#6f4e37] text-white p-2 rounded hover:bg-[#826450] transition" onClick={handleSubmit}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
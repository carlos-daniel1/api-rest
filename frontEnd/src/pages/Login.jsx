import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Cookies from "js-cookie";
import httpservice from "../services/httpServices";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState({ value: '', dirty: false });
  const [password, setPassword] = useState({ value: '', dirty: false });
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
      try {
        const response = await httpservice.login({ email: email.value, password: password.value });
        const json = await response.json();

        if (response.status === 200 && json.token) {

          Cookies.set("token", json.token);
          navigate("/home");
        } else {
          alert("Credenciais inválidas");
        }
      } catch (error) {

        console.error("Erro ao fazer login:", error);
        alert("Erro ao tentar fazer login. Tente novamente.");
      }
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-cover" style={{ backgroundImage: "url('https://img.freepik.com/fotos-premium/dia-internacional-do-cafe-4k-e-arte-incrivel_433229-35.jpg')", }}></div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-[#DCC9A6] p-8">
        <div className="text-center mb-6">
          <img className="mx-auto h-30 w-35" src="https://www.svgrepo.com/show/373517/coffeescript.svg" alt="Coffe Script" />
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#4B2E2B]">Coffe Script</h2>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#4B2E2B]">Login</h2>
          <form>
            <div className="mb-4 text-left">
              <label className="block text-[#4B2E2B]">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite seu email"
                value={email.value}
                onChange={(event) => setEmail({ value: event.target.value, dirty: true })} />
              {handleErrorEmail()}
            </div>
            <div className="mb-4 text-left">
              <label className="block text-[#4B2E2B]">Senha</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Digite sua senha"
                value={password.value}
                onChange={(event) => setPassword({ value: event.target.value, dirty: true })} />
              {handleErrorPassword()}
            </div>
            <button type="button" className="w-full bg-[#6f4e37] text-white p-2 rounded hover:bg-[#826450] transition" onClick={handleSubmit}>Entrar</button>
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
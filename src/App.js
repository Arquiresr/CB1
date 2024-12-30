import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Home from './Principal'; // Página principal (depois de autenticação)
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MyImage from './procurar.png';
import MyImage1 from './aas.png';
import mascara from './Mscara/mascara';
import InputMask from 'react-input-mask';
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase"; // Configuração Firebase

const Login = ({ onNavigate }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );

      const user = userCredential.user;
      alert(`Bem-vindo, ${user.email}!`);
      onNavigate('home'); // Navega para a página principal
    } catch (error) {
      console.error("Erro ao fazer login: ", error.message);
      alert("Erro ao fazer login: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Entrar</button>
        <ff type="button" onClick={() => onNavigate('form')}>
          Não tem conta? Cadastre-se
        </ff>
      </form>
    </div>
  );
};

const Form = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      await addDoc(collection(db, "Empresa"), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        cpf: formData.cpf,
		Senha: formData.password,
      });

      alert(`Usuário cadastrado com sucesso!`);
      onNavigate('login'); // Retorna para o login após o cadastro
    } catch (error) {
      console.error("Erro ao cadastrar usuário: ", error.message);
      alert("Erro ao cadastrar usuário: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome Completo:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf">CPF:</label>
        <InputMask
          id="cpf"
          mask="999.999.999-99"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');

  const renderScreen = () => {
    if (currentScreen === 'login') {
      return <Login onNavigate={setCurrentScreen} />;
    }
    if (currentScreen === 'form') {
      return <Form onNavigate={setCurrentScreen} />;
    }
    if (currentScreen === 'home') {
      return <Home />;
    }
  };

  return <div className="app-container">{renderScreen()}</div>;
};

export default App;
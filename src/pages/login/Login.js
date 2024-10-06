import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Para redirecionar
import './Login.css'; // Arquivo CSS atualizado

const Login = () => {
  const { register, handleSubmit, formState: { errors, isValid }, trigger } = useForm({
    mode: 'onBlur' // Validação ao perder foco no campo
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Hook do react-router-dom para redirecionamento

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError('');

    // Simulação de uma chamada à API de login com um tempo de espera
    setTimeout(() => {
      const { email, password } = data;

      // Simulação de validação de usuário
      if (email === 'admin@teste.com' && password === 'admin123') {
        // Login bem-sucedido
        console.log('Login realizado com sucesso:', data);
        navigate('/users'); // Redireciona para a página de listagem de usuários
      } else {
        // Login falhou
        setLoginError('Email ou senha incorretos. Tente novamente.');
      }

      setIsLoading(false);
    }, 2000); // Simula uma espera de 2 segundos
  };

  return (
    <div className="login-container">


      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className={errors.email ? 'input-error' : ''}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register('email', { 
              required: 'Email é obrigatório', 
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' }
            })}
            onBlur={() => trigger('email')} // Validação ao perder foco
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        <div className={errors.password ? 'input-error' : ''}>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            {...register('password', { required: 'Senha é obrigatória' })}
            onBlur={() => trigger('password')} // Validação ao perder foco
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>

        {loginError && <p className="error-message">{loginError}</p>}

        <button type="submit" disabled={!isValid || isLoading}>
          {isLoading ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default Login;

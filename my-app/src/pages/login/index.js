import React, { useState } from 'react';
import { useAppContext } from '../../context';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();

  const { login } = useAppContext();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Perform login logic here, e.g., calling a login API
    // For simplicity, we'll just call the login function from the context
    login({ username: formData.username , password: formData.password } , ( ) => {
        navigate('/collections')
    });
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};


export default function LoginPage () {


    return (
        <div>
            <h1> login page </h1>
            <LoginForm />
        </div>
    )
}

import { SyntheticEvent, useState } from 'react';
import LabelWithInput from './LabelWithInput';
import axios from 'axios';
import useLocalStorage from '../effects/useLocalStorage';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [token, setToken] = useLocalStorage('token', '');
    const navigate = useNavigate();

    async function onSubmit(e: SyntheticEvent) {
        e.preventDefault();
        try {
            const response = await axios.post('https://dogs.kobernyk.com/login', {
                username,
                password,
            });

            console.log('Успішна авторизація:', response.data);
            setToken(response.data.token);
            navigate('/dashboard'); 

        } catch (error) {
            console.error('Помилка авторизації:', error);
        }
    }

    return (
        <>
            <h1>Сторінка авторизації</h1>
            <form onSubmit={onSubmit}>
                <LabelWithInput
                    type="text"
                    name="username"
                    labeltext="Ім'я користувача"
                    value={username}
                    onChange={(value) => setUsername(value)}
                />
                <LabelWithInput
                    type="password"
                    name="password"
                    labeltext="Пароль"
                    value={password}
                    onChange={(value) => setPassword(value)}
                />
                <br />
                <button type="submit">Зареєстуватися</button>
            </form>
        </>
    );
};

export default Login;

import { Link } from 'react-router-dom';
import useLocalStorage from '../effects/useLocalStorage';
import axios from 'axios';

const Main = () => {
  const [token, setToken] = useLocalStorage('token', '');
  
  function logout() {
    setToken('');
  }

  async function getDogs() {
    try {
      const response = await axios.get('https://dogs.kobernyk.com/login', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      console.log(response.data);  
    } catch (error) {
      console.error('Помилка отримання даних:', error);
    }
  }

  if (token) {
    getDogs();
  }

  return (
    <>
      {token ? (
        <>
          <button onClick={logout}>Вийти</button>
          <p>Ви вже авторизовані!</p>
        </>
      ) : (
        <>
          <Link to="/signup">Sign Up</Link>
          <br />
        </>
      )}
    </>
  );
};

export default Main;

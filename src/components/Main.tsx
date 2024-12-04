import { Link } from 'react-router-dom';
import useLocalStorage from '../effects/useLocalStorage';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Main = () => {
  const [token, setToken] = useLocalStorage('token', '');
  const [dogs, setDogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function logout() {
    setToken('');
  }

  async function getDogs() {
    if (!token) return;

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://dogs.kobernyk.com/login', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDogs(response.data);
    } catch (err) {
      setError('Помилка отримання даних');
      console.error('Помилка отримання даних:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      getDogs();
    }
  }, [token]);

  return (
    <>
      {token ? (
        <>
          <button onClick={logout}>Вийти</button>
          <p>Ви вже авторизовані!</p>
          {loading && <p>Завантаження...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {dogs.length > 0 && (
            <ul>
              {dogs.map((dog, index) => (
                <li key={index}>{dog.name}</li>
              ))}
            </ul>
          )}
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

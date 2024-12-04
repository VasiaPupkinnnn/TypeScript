import { Route, Routes } from 'react-router-dom';  // Використовуємо 'react-router-dom' для версії 6
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Маршрут для головної сторінки */}
          <Route path="/" element={<Main />} />

          {/* Маршрут для сторінки входу */}
          <Route path="/login" element={<Login />} />

          {/* Додатковий маршрут для невідповідних шляхів (404) */}
          <Route path="*" element={<div>Сторінку не знайдено</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

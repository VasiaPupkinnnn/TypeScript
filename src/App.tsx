import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}>
          </Route>
          {/* <Route path="/:dogId" element={<DogPage/>}>
          </Route> */}
          <Route path='/login' element={<Login/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
